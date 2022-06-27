import React from 'react'

class ContactForm extends React.Component{

    state = {
        'first_name': '',
        'last_name': '',
        'enquiry': '',
        'country': ''
    }

    updateFirstName = (e) => {
        this.setState({
            'first_name': e.target.value
        })
    }

    updateLastName = (e) => {
        this.setState({
            'last_name': e.target.value
        })
    }

    updateEnquiry = (e) => {
        this.setState({
            'enquiry': e.target.value
        })
    }

    updateCountry = (e) => {
        this.setState({
            'country': e.target.value
        })
    }

    click = () => {
        console.log(this.state.country, this.state.enquiry, this.state.first_name, this.state.last_name)
    }

    render(){

        return(

            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input name='first_name' type='text' value={this.state.first_name} onChange={this.updateFirstName}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name='last_name' type='text' value={this.state.last_name} onChange={this.updateLastName}/>
                </div>
                <div>
                    <label>Enquiry:</label>
                    <input name='enquiry' type='radio' value='support' checked={this.state.enquiry === 'support'} onChange={this.updateEnquiry}/>Support
                    <input name='enquiry' type='radio' value='sales' checked={this.state.enquiry === 'sales'} onChange={this.updateEnquiry}/>Sales
                    <input name='enquiry' type='radio' value='marketing' checked={this.state.enquiry === 'marketing'} onChange={this.updateEnquiry}/>Marketing
                </div>
                <div>
                    <label>Country: </label>
                    <select name='country' value={this.state.country} onChange={this.updateCountry}>
                        <option value='singapore'>Singapore</option>
                        <option value='malaysia'>Malaysia</option>
                        <option value='indonesia'>Indonesia</option>
                    </select>
                </div>
                <button onClick={this.click} disabled={! (this.state.country && this.state.enquiry && this.state.first_name && this.state.last_name)}>Submit</button>
            </React.Fragment>

        )
    }

}

export {ContactForm}