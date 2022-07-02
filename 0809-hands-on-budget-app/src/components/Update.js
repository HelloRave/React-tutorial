import React from 'react'

export default function Update(props) {
    return (
    <div className='card'>
        <div className='card-body'>

            <div className='my-2'>
                <label>Description: </label>
                <input type='text' name='updatedDescription' value={props.updatedDescription}
                    onChange={props.updateFormField} />
            </div>

            <div className='my-2'>
                <label>Date: </label>
                <input type='text' name='updatedDate' value={props.updatedDate} onChange={props.updateFormField} />
            </div>

            <div className='my-2'>
                <label>Category of Expense: </label>
                <select name='updatedCategory' value={props.updatedCategory} onChange={props.updateFormField}>
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
                <input type='number' name='updatedAmount' value={props.updatedAmount}
                    onChange={props.updateAmount} />
            </div>

            <label>Reconciled: </label>
            <input type='checkbox' className='form-check-input mx-2'
                checked={props.updateReconciled}
                onChange={props.changeUpdateReconciled} /><label className='form-check-label'>Yes</label>

            <div className='mt-2'>
                <button className='btn btn-danger btn-sm mx-2'
                    onClick={props.confirmUpdate}
                >Confirm</button>
                <button className='btn btn-primary btn-sm'
                    onClick={props.cancelUpdate}>Cancel</button>
            </div>
        </div>
    </div>
    )
}