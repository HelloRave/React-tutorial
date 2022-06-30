import React from 'react'

export default class TaskList extends React.Component {
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
        newTaskName: '',
        taskBeingEdited: null, //alternatively, store the _id of the task that is being edited
        modifiedTaskName: ''
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
        let clonedTask = { ...task, done: !task.done } //last instance of repeated key will overwrite other prev instances

        // 1. find index of modified task
        let index = this.state.task.findIndex((t) => {
            if (t._id === clonedTask._id) {
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

    beginEditTask = (task) => {
        this.setState({
            taskBeingEdited: task
        })
    }

    displayTask = (task) => {
        return (
            <li className='mt-3'>
                {task.description}
                <input type='checkbox'
                    className='form-check-input ms-3'
                    checked={task.done}
                    onChange={() => {
                        this.updateTaskDone(task)
                    }} />
                <button className='btn btn-primary ms-3'
                    onClick={() => {
                        this.setState({
                            taskBeingEdited: task,
                            modifiedTaskName: task.description
                        })
                    }}>Edit</button>
                <button className='btn btn-danger ms-3' onClick={() => {this.deleteTask(task)}}>Delete</button>
            </li>
        )
    }

    displayEditTask = () => {
        return(
            <li className='mt-3'>
                <input type='text' name='modifiedTaskName' value={this.state.modifiedTaskName} onChange={this.updateFormField}/>
                <button className='btn btn-primary btn-sm ms-3'
                        onClick={this.updateTask}>Update</button>
            </li>
        )
    }

    updateTask = () => {
        let modifiedTask = {
            ...this.state.taskBeingEdited, description: this.state.modifiedTaskName
        }

        let index = this.state.task.findIndex((task) => {
            return task._id === modifiedTask._id
        })

        let cloned = this.state.task.slice()

        cloned.splice(index, 1, modifiedTask);

        this.setState({
            task: cloned,
            taskBeingEdited: null
        })
    }

    deleteTask = (task) => {
        let index = this.state.task.findIndex( t => t._id === task._id)

        let cloned = [...this.state.task.slice(0, index), ...this.state.task.slice(index + 1)]

        this.setState({
            task: cloned
        })

    }

    render() {
        return (
            <React.Fragment>
                <h1>To Do List</h1>
                {
                    this.state.task.map((obj) => {
                        return (
                            <React.Fragment key={obj._id}>


                                {this.state.taskBeingEdited === null || this.state.taskBeingEdited._id !== obj._id ?

                                    this.displayTask(obj)
                                    :
                                    this.displayEditTask()

                                }
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
                        onChange={this.updateFormField} />
                    <button className='mt-2 btn btn-primary' onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )
    }
}