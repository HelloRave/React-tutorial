import React from 'react'

export default function Expense(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className="card-title">{props.expense.description}</h5>
                <p className='card-text'>Date: {props.expense.date}</p>

                <label>Category of Expense: </label>
                <select value={props.expense.category}>
                    <option value='transport'>Transport</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='food'>Food</option>
                    <option value='bills'>Bills</option>
                    <option value='loans'>Loans</option>
                    <option value='others'>Others</option>
                </select>

                <p className='card-text'>Amount: ${props.expense.amount}</p>

                <label>Reconciled: </label>
                <input type='checkbox' className='form-check-input mx-2' /><label className='form-check-label'>Yes</label>
            </div>
        </div>
    )
}