import React from 'react'

export default class RestaurantBooking extends React.Component {

    // Non state
    seatings = [
        {
            display: 'Outdoors',
            value: 'outdoors'
        },
        {
            display: 'Indoors',
            value: 'indoors'
        },
        {
            display: 'VIP-indoors',
            value: 'vip-indoors'
        }
    ]

    smoking = [
        {
            display: 'Smoking',
            value: 'smoking'
        },
        {
            display: 'Non-Smoking',
            value: 'non-smoking'
        }
    ]


    appetizer = [
        {
            display: 'Raw Fishes',
            value: 'raw-fishes'
        },
        {
            display: 'Salad',
            value: 'salad'
        },
        {
            display: 'Fried Cuttlefish',
            value: 'fried-cuttlefish'
        },
        {
            display: 'Peanuts',
            value: 'peanuts'
        }
    ]

    // State
    state = {
        firstName: '',
        lastName: '',
        seatings: '',
        smoking: '',
        appetizer: []
    }

    // Functions
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAppetizer = (e) => {

        if (this.state.appetizer.includes(e.target.value)) {
            let indexToRemove = this.state.appetizer.indexOf(e.target.value)
            let cloned = [...this.state.appetizer.slice(0, indexToRemove), ...this.state.appetizer.slice(indexToRemove + 1)]

            this.setState({
                appetizer: cloned
            })
        } else {
            let cloned = [...this.state.appetizer, e.target.value]

            this.setState({
                appetizer: cloned
            })
        }

    }

    // Render
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name: </label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Seatings: </label>

                    {this.seatings.map((obj) => {
                        return (
                            <React.Fragment>
                                <input type='radio' name='seatings' value={obj.value} checked={this.state.seatings === obj.value} onChange={this.updateFormField} />
                                <label>{obj.display}</label>
                            </React.Fragment>)

                    })}
                </div>
                <div>
                    <label>Smoking: </label>

                    <select name='smoking' value={this.state.smoking} onChange={this.updateFormField}>
                        {this.smoking.map((obj) => {
                            return (
                                <option value={obj.value}>{obj.display}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Appetizer: </label>

                    {this.appetizer.map((obj) => {
                        return (
                            <React.Fragment>
                                <input type='checkbox' name='appetizer' value={obj.value} checked={this.state.appetizer.includes(obj.value)} onChange={this.updateAppetizer} />
                                <label>{obj.display}</label>
                            </React.Fragment>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}