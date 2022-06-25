function sayHello(){
    return 'Hello'
  }
  
  function sayGoodBye(){
    let g = <p>Goodbye World</p>
  
    return g 
  
    // or just return <p>Goodbye World</p>
  }
  
  function Alert(props){
    return <div style={{backgroundColor:props.bgColor}}>{props.message}</div>
  }
  
  function BorderedImageFrame(props){
    return <img style={{border:props.properties}} src= {props.img} /> 
  }
  
  function AdditionOfTwo(props){ 
    let sum = parseInt(props.first) + props.second
    return <div>{sum}</div>
  }

  export {sayHello, sayGoodBye, AdditionOfTwo, Alert, BorderedImageFrame}