import React from 'react'

export default function AddExpense(props) {
    return (
        <div>
            <h2>Add New Expense</h2>

            <div className='my-2'>
                <label>Date: </label>
                <input type='text'
                    placeholder='DD-MM-YYYY'
                    name='addedDate'
                    value={props.addedDate}
                    onChange={props.updateFormField}
                />
            </div>

            <div className='my-2'>
                <label>Description: </label>
                <input type='text'
                    name='addedDescription'
                    value={props.addedDescription}
                    onChange={props.updateFormField}
                />
            </div>

            <div className='my-2'>
                <label>Category of Expense: </label>
                <select name='addedCategory' value={props.addedCategory} onChange={props.updateFormField}>
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
                <input type='number'
                    name='addedAmount'
                    value={props.addedAmount}
                    onChange={props.updateAmount}
                />
            </div>


            <div className='my-2'>
                <label>Reconciled: </label>
                <input type='checkbox'
                    className='form-check-input mx-2'
                    checked={props.reconciled}
                    onChange={props.updateReconciled} />
                <label className='form-check-label'>Yes</label>
            </div>

            <button className='btn btn-primary btn-sm'
                onClick={props.addToExpense}>Add</button>

        </div>
    )
}