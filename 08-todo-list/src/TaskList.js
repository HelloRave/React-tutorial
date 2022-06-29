import React from 'react'

export default class TaskList extends React.Component{
    state = {
        task: [
            {
                _id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'Water the plants',
                done: false
            },
            {
                _id: 3,
                description: 'Pay the bill',
                done: false
            }
        ],
        newTaskName: ''
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 100_000_000 + 1),
            description: this.state.newTaskName,
            done: false
        }

        let cloned = [...this.state.task, newTask]
        this.setState({
            task: cloned
        })
    }

    updateTaskDone = (task) => {
        let clonedTask = {...task, done: !task.done} //last instance of repeated key will overwrite other prev instances
        
        // 1. find index of modified task
        let index = this.state.task.findIndex((t) => {
            if(t._id === clonedTask._id){
                return true;
            } else {
                return false
            }
        })

        // 2. update array 
        this.setState({
            task: [...this.state.task.slice(0, index), clonedTask, ...this.state.task.slice(index + 1)]
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>To Do List</h1>
                {
                    this.state.task.map((obj) => {
                        return (
                            <React.Fragment key={obj._id}>
                                <li>
                                    {obj.description}
                                    <input type='checkbox' 
                                           className='form-check-input ms-3' 
                                           checked={obj.done} 
                                           onChange={() => {
                                            this.updateTaskDone(obj)
                                           }}/>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
                <h2 className='mt-3'>Add a new task</h2>
                <div>
                    <label>Task Name: </label>
                    <input type='text' 
                           className='form-control' 
                           name='newTaskName' 
                           value={this.state.newTaskName} 
                           onChange={this.updateFormField}/>
                    <button className='mt-2 btn btn-primary' onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )
    }
}