import React from 'react'
import AddNewTask from './components/AddNewTask'
import Task from './components/Task'
import EditTask from './EditTask'

export default class TaskList extends React.Component{
    state = {
        'tasks':[
            {
                _id: 1,
                description: 'Wash the car',
                done: false
            },
            {
                _id: 2,
                description: 'Clean the toilet',
                done: false
            },
            {
                _id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        newTaskDescription: '',
        taskBeingEdited: {},
        modifiedTaskDescription: ''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateTaskDone = (task) => {
        let index = this.state.tasks.findIndex( t => t._id === task._id)

        let modifiedTask = {
            ...task, done: !task.done
        }

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                modifiedTask,
                ...this.state.tasks.slice(index + 1)
            ]
        })

    }

    addTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 100_000 + 1),
            description: this.state.newTaskDescription,
            done: false 
        }

        this.setState({
            tasks: [...this.state.tasks, newTask],
            newTaskDescription: ''
        })
    }

    beginEdit = (task) => {
        this.setState({
            taskBeingEdited: task,
            modifiedTaskDescription: task.description
        })
    }

    processUpdate = () => {
        let modifiedTask = {...this.state.taskBeingEdited, description: this.state.modifiedTaskDescription}
        
        let index = this.state.tasks.findIndex( t => t._id === modifiedTask._id)

        let cloned = this.state.tasks.slice()

        cloned.splice(index, 1, modifiedTask)

        this.setState({
            tasks: cloned,
            taskBeingEdited: {}
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Task List</h1>
                <ul className='list-group'>
                {this.state.tasks.map((task) => {

                    if (this.state.taskBeingEdited._id !== task._id){
                        return(
                            <React.Fragment key={task._id}>
                                <Task task={task} updateTaskDone={this.updateTaskDone}
                                      beginEdit={this.beginEdit}/>
                            </React.Fragment>
                        )
                    } else {
                        return <EditTask key={task._id}
                                         modifiedDescription={this.state.modifiedTaskDescription}
                                         updateFormField={this.updateFormField}
                                         processUpdate={this.processUpdate}/>
                    }

                    
                })}
                </ul>

                <AddNewTask newTaskDescription={this.state.newTaskDescription} 
                            updateFormField={this.updateFormField}
                            addTask={this.addTask} />
                
            </React.Fragment>
        )
            
        
    }
}