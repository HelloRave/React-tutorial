import React from 'react';

import {sayHello, sayGoodBye, AdditionOfTwo, Alert, BorderedImageFrame} from './functions.js'

export default function App(){
  return(
    <React.Fragment>
      <h1>Hello world</h1>
      {/* Comments */}
      {sayHello()}
      {sayGoodBye()}
      <Alert bgColor='red' message='Collision'/> 
      <Alert bgColor='yellow' message='Fuel Low'/> 
      <BorderedImageFrame properties='4px solid red' img={require('./japanese-food-1.jpg')}/>
      <BorderedImageFrame properties='4px solid red' img={require('./japanese-food-2.jpg')}/>
      <AdditionOfTwo first='1' second={2}/>
    </React.Fragment>
  )
}

