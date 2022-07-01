import React from 'react'
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
        ]
    }

    render() {
        return (
            <React.Fragment>
                {this.state.expenses.map((expense) => {
                    return (
                        <Expense expense={expense}/>
                    )
                })}

                <div>
                    <h2>Add New Expense</h2>
                    
                    <label>Date: </label>
                    <input type='text' 
                           placeholder='DD-MM-YYYY'
                           />
                </div>
            </React.Fragment>
        )
    }
}