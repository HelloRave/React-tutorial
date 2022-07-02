import React from 'react'

export default function Expense(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className="card-title">{props.expense.description}</h5>
                <p className='card-text'>Date: {props.expense.date}</p>

                <label>Category of Expense: </label>
                <p className='card-text'>Category: {props.expense.category}</p>

                <p className='card-text'>Amount: ${props.expense.amount}</p>

                <label>Reconciled: </label>
                <input type='checkbox' className='form-check-input mx-2'
                    checked={props.expense.reconciled}
                    onChange={props.updateReconciled} /><label className='form-check-label'>Yes</label>

                <div className='mt-2'>
                    <button className='btn btn-primary btn-sm mx-2'
                            onClick={props.toUpdate}>Update</button>
                    <button className='btn btn-danger btn-sm'
                            onClick={props.toDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}