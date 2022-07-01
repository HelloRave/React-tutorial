import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainDisplay from './components/MainDisplay'

export default function App(){
  return (
    <React.Fragment>
      <h1>Budget App</h1>
      <MainDisplay />
    </React.Fragment>
  )
}