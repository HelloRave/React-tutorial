import React from 'react'

class NumberBox extends React.Component {

    state = {
        'count': this.props.intialValue
    }

    decreaseValue = () => {
        this.setState({
            'count': this.state.count - 1
        })
    }

    increaseValue = () => {
        this.setState({
            'count': this.state.count + 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    "border": "1px solid black",
                    "padding": "10px"
                }}>
                    <button onClick={this.decreaseValue}>-</button>
                    {this.state.count}
                    <button onClick={this.increaseValue}>+</button>
                </div>
            </React.Fragment>

        )
    }
}

class AlertBox extends React.Component {

    state = {
        message: this.props.message
    }

    // Event listener should always be arrow function 
    click = () => {
        alert('Clicked!')
    }

    render() {
        return (
            <div style={
                {
                    border: '4px solid black'
                }
            } onClick={this.click}>{this.state.message}
            </div>

        )
    }
}

class TickleBox extends React.Component {

    state = {
        message: ''
    }

    mouseEnter = () => {
        this.setState({
            message: 'That tickles'
        })
    }

    mouseLeave = () => {
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div style={
                {
                    border: '1px solid red'
                }
            } onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                {this.state.message}
            </div>
        )
    }
}

export { NumberBox, AlertBox, TickleBox }