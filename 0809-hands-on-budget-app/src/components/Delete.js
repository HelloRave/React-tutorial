import React from 'react'

export default function Delete(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <p className='card-text'>Are you sure you want to delete: {props.expense.description}</p>
                <button className='btn btn-danger btn-sm mx-2'
                    onClick={props.confirmDelete}>Yes</button>
                <button className='btn btn-success btn-sm mx-2'
                    onClick={props.cancelDelete}>No</button>
            </div>
        </div>
    )
}