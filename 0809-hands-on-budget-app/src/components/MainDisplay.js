import React from 'react'
import AddExpense from './AddExpense'
import Delete from './Delete'
import Expense from './Expense'

export default class MainDisplay extends React.Component {

    state = {
        expenses: [
            {
                _id: 1,
                date: '01-01-2022',
                description: 'Buy Chicken Rice',
                category: 'food',
                amount: 5,
                reconciled: false
            },
            {
                _id: 2,
                date: '02-01-2022',
                description: 'Buy New Shirt',
                category: 'entertainment',
                amount: 40,
                reconciled: false
            },
            {
                _id: 3,
                date: '03-01-2022',
                description: 'Pay Insurance',
                category: 'bill',
                amount: 2000,
                reconciled: false
            }
        ],
        display: 'expense',
        addedDate: '',
        addedDescription: '',
        addedCategory: '',
        addedAmount: 0,
        reconciled: false,
        toDelete: {},
        toUpdate: {},
        updatedDescription: '',
        updatedDate: '',
        updatedCategory: '',
        updatedAmount: 0,
        updateReconciled: false 
    }


    // Functions
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateReconciled = (expense) => {

        let updatedExpense = { ...expense, reconciled: !expense.reconciled }

        let index = this.state.expenses.findIndex((e) => e._id === expense._id)

        this.setState({
            expenses: [...this.state.expenses.slice(0, index), updatedExpense, ...this.state.expenses.slice(index + 1)]
        })
    }

    addToExpense = () => {
        let newExpense = {
            _id: Math.floor(Math.random() * 100_000 + 1),
            date: this.state.addedDate,
            description: this.state.addedDescription,
            category: this.state.addedCategory,
            amount: this.state.addedAmount,
            reconciled: this.state.reconciled
        }

        this.setState({
            expenses: [...this.state.expenses, newExpense],
            addedDate: '',
            addedDescription: '',
            addedCategory: '',
            addedAmount: null,
            reconciled: false
        })
    }

    confirmDelete = () => {
        let index = this.state.expenses.findIndex((e) => e._id === this.state.toDelete._id)

        this.setState({
            expenses: [...this.state.expenses.slice(0, index), ...this.state.expenses.slice(index + 1)]
        })
    }

    confirmUpdate = () => {
        let updateExpense = {
            _id: Math.floor(Math.random() * 100_000 + 1),
            date: this.state.updatedDate,
            description: this.state.updatedDescription,
            category: this.state.updatedCategory,
            amount: this.state.updatedAmount,
            reconciled: this.state.updateReconciled
        }

        let index = this.state.expenses.findIndex((e) => e._id === this.state.toUpdate._id)

        this.setState({
            expenses: [...this.state.expenses.slice(0, index), updateExpense, ...this.state.expenses.slice(index + 1)]
        })
    }

    displayOrUpdateOrDelete = (expense) => {
        if (expense._id === this.state.toDelete._id) {
            return (
                <Delete key={expense._id}
                    expense={expense}
                    confirmDelete={this.confirmDelete}
                    cancelDelete={() => {
                        this.setState({
                            toDelete: {}
                        })
                    }} />
            )
        } else if (expense._id === this.state.toUpdate._id) {
            return (
                <div className='card'>
                    <div className='card-body'>

                        <div className='my-2'>
                            <label>Description: </label>
                            <input type='text' name='updatedDescription' value={this.state.updatedDescription}
                                onChange={this.updateFormField} />
                        </div>

                        <div className='my-2'>
                            <label>Date: </label>
                            <input type='text' name='updatedDate' value={this.state.updatedDate} onChange={this.updateFormField} />
                        </div>

                        <div className='my-2'>
                            <label>Category of Expense: </label>
                            <select name='updatedCategory' value={this.state.updatedCategory} onChange={this.updateFormField}>
                                <option value='transport'>Transport</option>
                                <option value='entertainment'>Entertainment</option>
                                <option value='food'>Food</option>
                                <option value='bills'>Bills</option>
                                <option value='loans'>Loans</option>
                                <option value='others'>Others</option>
                            </select>
                        </div>


                        <div className='my-2'>
                            <label>Amount: </label>
                            <input type='number' name='updatedAmount' value={this.state.updatedAmount}
                                onChange={(event) => {
                                    this.setState({
                                        updatedAmount: Number(event.target.value)
                                    })
                                }} />
                        </div>

                        <label>Reconciled: </label>
                        <input type='checkbox' className='form-check-input mx-2'
                               checked={this.state.updateReconciled}
                               onChange={() => {
                                this.setState({
                                    updateReconciled: !this.state.updateReconciled
                                })
                               }}/><label className='form-check-label'>Yes</label>

                        <div className='mt-2'>
                            <button className='btn btn-danger btn-sm mx-2'
                                    onClick={this.confirmUpdate}
                            >Confirm</button>
                            <button className='btn btn-primary btn-sm'
                                onClick={() => {
                                    this.setState({
                                        toUpdate: {}
                                    })
                                }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <Expense key={expense._id}
                    expense={expense}
                    updateReconciled={() => {
                        this.updateReconciled(expense)
                    }}
                    toDelete={() => {
                        this.setState({
                            toDelete: expense
                        })
                    }}
                    toUpdate={() => {
                        this.setState({
                            toUpdate: expense,
                            updatedDescription: expense.description,
                            updatedDate: expense.date,
                            updatedCategory: expense.category,
                            updatedAmount: expense.amount,
                            updateReconciled: expense.reconciled
                        })
                    }} />
            )
        }
    }

    // Render
    render() {
        return (
            <React.Fragment>
                {this.state.expenses.map((expense) => {
                    return (
                        this.displayOrUpdateOrDelete(expense)
                    )
                })}

                <AddExpense addedDate={this.state.addedDate}
                    addedDescription={this.state.addedDescription}
                    addedCategory={this.state.addedCategory}
                    addedAmount={this.state.addedAmount}
                    reconciled={this.state.reconciled}
                    updateFormField={this.updateFormField}
                    updateAmount={(event) => {
                        this.setState({
                            addedAmount: Number(event.target.value)
                        })
                    }}
                    updateReconciled={() => {
                        this.setState({
                            reconciled: !this.state.reconciled
                        })
                    }}
                    addToExpense={this.addToExpense}
                />
            </React.Fragment>
        )
    }
}