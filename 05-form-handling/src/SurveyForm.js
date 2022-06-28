import React from 'react'

class ContactForm extends React.Component {

    state = {
        'first_name': '',
        'last_name': '',
        'enquiry': '',
        'country': '',
        contact: [],
        hasSubmitted: false
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateContact = (e) => {
        if (this.state.contact.includes(e.target.value)){
            let indexToRemove = this.state.contact.indexOf(e.target.value)
            let cloned = [...this.state.contact.slice(0, indexToRemove), ...this.state.contact.slice(indexToRemove + 1)]

            this.setState({
                [e.target.name]: cloned
            })
        } else {
            let cloned = [...this.state.contact, e.target.value]

            this.setState({
                [e.target.name]: cloned
            })
        }
    }

    click = () => {
        console.log(this.state.country, this.state.enquiry, this.state.first_name, this.state.last_name)
    }

    // Explore validator libraries 
    validateName = () => {
        if (this.state.first_name.length < 3) {
            return "Must have 3 or more characters"
        } else if (this.state.first_name.length > 20) {
            return "Must have less than 20 characters"
        } else {
            return null
        }
    }

    submit = () => {

        this.setState({
            hasSubmitted: true
        })

        if(!this.validateName()){
            alert('All data is ok')
        } else {
            alert('Not ok')
        }
    }

    render() {

        return (

            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input name='first_name' type='text' value={this.state.first_name} onChange={this.updateFormField} />
                    {this.validateName() && this.state.hasSubmitted ? <span>{this.validateName()}</span> : ''}
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
                    <label>Contacts: </label>
                    <input type='checkbox' name='contact' value='email' checked={this.state.contact.includes('email')} onChange={this.updateContact}/><label>Email</label>
                    <input type='checkbox' name='contact' value='phone' checked={this.state.contact.includes('phone')} onChange={this.updateContact}/><label>Phone</label>
                    <input type='checkbox' name='contact' value='slow-mail' checked={this.state.contact.includes('slow-mail')} onChange={this.updateContact}/><label>Slow Mail</label>
                </div>
                <button onClick={this.submit} disabled={!(this.state.country && this.state.enquiry && this.state.first_name && this.state.last_name)}>Submit</button>
            </React.Fragment>

        )
    }

}

export { ContactForm }