import React from 'react'

export default function EditTask(props){
    return(
        <React.Fragment>
            <li className='list-group-item'>
                <input type='text'
                       name='modifiedTaskDescription'
                       value={props.modifiedDescription}
                       onChange={props.updateFormField}
                       className='form-control' />
                <button className='btn btn-info btn-sm mt-2' onClick={props.processUpdate}>Update</button>
            </li>
        </React.Fragment>
    )
}