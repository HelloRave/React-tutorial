import React from 'react'
import axios from 'axios'

export default class Shop extends React.Component {
    state = {
        products: [],
        loaded: false
    }

    // JSON file must be in public folder ***
    async componentDidMount() {
        let response = await axios.get('/products.json')
        console.log(response.data)
        this.setState({
            products: response.data,
            loaded: true
        })
    }

    renderProducts() {
        if (this.state.loaded) {
            return (
                <ul>
                    {this.state.products.map((p) => {
                        return <li key={p._id}>{p.name}: ${p.cost / 100}</li>
                    })}
                </ul>
            )
        } else {
            return <p>Please wait loading...</p> //Can put CSS loader here as well
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Our Shop</h1>
                {
                    this.state.loaded ?
                        <ul>
                            {this.state.products.map((p) => {
                                return <li key={p._id}>{p.name}: ${p.cost / 100}</li>
                            })}
                        </ul>
                        :
                        <p>Loading please wait</p>
                }

            </React.Fragment>
        )
    }
}