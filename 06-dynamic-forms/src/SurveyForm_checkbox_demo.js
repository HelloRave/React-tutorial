import React from 'react'

class ContactForm extends React.Component {

    state = {
        'first_name': '',
        'last_name': '',
        'enquiry': '',
        'country': '',
        fruits: []
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateFruits = (e) => {
        // Check if value in array 
        if (this.state.fruits.includes(e.target.value)) {
            // 1. Clone array 
            // 2. Remove from the clon
            // 3. Replace cloned array into state 

            let indexToRemove = this.state.fruits.indexOf(e.target.value);
            let cloned = [
                ...this.state.fruits.slice(0, indexToRemove),
                ...this.state.fruits.slice(indexToRemove+1)
            ]
            this.setState({
                'fruits':cloned
            })

        } else {
            // 1. Clone original array
            // 2. Update cloned array

            let cloned = [...this.state.fruits, e.target.value]

            // 3. Set cloned array back into the state
            
            this.setState({
                fruits: cloned
            })
        }

    }

    click = () => {
        console.log(this.state.country, this.state.enquiry, this.state.first_name, this.state.last_name)
    }

    render() {

        return (

            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input name='first_name' type='text' value={this.state.first_name} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name='last_name' type='text' value={this.state.last_name} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Enquiry:</label>
                    <input name='enquiry' type='radio' value='support' checked={this.state.enquiry === 'support'} onChange={this.updateFormField} />Support
                    <input name='enquiry' type='radio' value='sales' checked={this.state.enquiry === 'sales'} onChange={this.updateFormField} />Sales
                    <input name='enquiry' type='radio' value='marketing' checked={this.state.enquiry === 'marketing'} onChange={this.updateFormField} />Marketing
                </div>
                <div>
                    <label>Country: </label>
                    <select name='country' value={this.state.country} onChange={this.updateFormField}>
                        <option value='singapore'>Singapore</option>
                        <option value='malaysia'>Malaysia</option>
                        <option value='indonesia'>Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits: </label>
                    <input type='checkbox' name='fruits' value='apple' onChange={this.updateFruits}/><label>Apple</label>
                    <input type='checkbox' name='fruits' value='orange' onChange={this.updateFruits}/><label>Orange</label>
                    <input type='checkbox' name='fruits' value='pineapple' onChange={this.updateFruits}/><label>Pineapple</label>
                    <input type='checkbox' name='fruits' value='durian' onChange={this.updateFruits}/><label>Durian</label>
                </div>
                <button onClick={this.click} disabled={!(this.state.country && this.state.enquiry && this.state.first_name && this.state.last_name)}>Submit</button>
            </React.Fragment>

        )
    }

}

export { ContactForm }