import React from 'react'
import AddNew from './pages/AddNew'
import Listing from './pages/Listings'

export default class RecipeBook extends React.Component{

    state = {
        active: 'listing' // the 'active' variable determines which page to show
    }

    renderContent(){
        if (this.state.active === 'listing'){
            return <Listing />
        } else if (this.state.active === 'add-new'){
            return <AddNew />
        }
    }

    changePage = (page) => {
        this.setState({
            active: page
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className='container'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <button className={'nav-link ' + (this.state.active === 'listing'? 'active' : '')} aria-current='page'
                                    onClick={() => {this.changePage('listing')}}>
                                Recipes
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button className={'nav-link ' + (this.state.active === 'add-new'? 'active' : '')} aria-current='page'
                                    onClick={() => {this.changePage('add-new')}}>
                                Add New
                            </button>
                        </li>
                    </ul>
                {this.renderContent()}
                </div>
            </React.Fragment>
        )
    }
}