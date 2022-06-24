import React from 'react'; // eqv to const React = require('react')
import logo from './logo.svg'
import './style.css'

//Create a React component 
function App(){
  // Must always return JSX
  // Only one parent is allowed (React.Fragment for an invisible div)
  return(
    <React.Fragment>
      <h1 style={
        {
          color:'green',
          backgroundColor: 'yellow'
        }
      }>Hello world</h1>
      <img src={logo}/>
    </React.Fragment>
  )
}

export default App; //eqv: module.exports = App 