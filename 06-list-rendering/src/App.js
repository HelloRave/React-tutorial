import React from 'react'

class App extends React.Component {

  state = {
    fruit: ['apple', 'pear', 'banana'],
    superheroes: ['Captain America', 'Spiderman', 'Iron Man', 'Superman']
  }
  
  renderSuperHeroes() {
    let superheroElements = this.state.superheroes.map((element) => {return <li>{element}</li>});
    // for (let s of this.state.superheroes){
    //   superheroElements.push(<li>{s}</li>)
    // }
    return superheroElements;
  }

  render(){

    let items = [];
    for (let i of this.state.fruit){
      items.push(<li>{i}</li>)
    }

    return (
      <div>
        <h1>Fruits</h1>
        <ul>
          {items}
        </ul>
        <h1>Superheroes</h1>
        <ol>
          {this.renderSuperHeroes()}
        </ol>
      </div>
    )
  }
  
}

export default App;
