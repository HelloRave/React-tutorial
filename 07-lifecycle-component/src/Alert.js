import React from 'react'

export default class Alert extends React.Component{

    state = {
        message: 'Some message'
    }

    constructor(props){
        super(props);
        console.log('constructor')
    }

    componentDidMount(){
        console.log('component did mount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
    }

    render(){
        return(
            <div>
                <h1>Alert</h1>
                <p>{this.state.message}</p>
            </div>
        )
    }
}