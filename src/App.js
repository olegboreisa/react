import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    person: [
      { name: 'Oleg', age: 26 },
      { name: 'Donatas', age: 27 }
    ]
  }

  render () {
    return (
      <>
      <div className="App">
          <h1>Hi, I am React App</h1>
          <p>This is actually working!</p>
          <button>Switch Name</button>
          <Person name={this.state.person[0].name} years={this.state.person[0].age} />
          <Person name={this.state.person[1].name} years={this.state.person[1].age} />
      </div> 
      </>
    );
  }
}

export default App;


   /** 
       * What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React/JavaScript. JSX makes it easier to write and add HTML in React. 
       * 
       One difference would be instead of class="", there is className="". React actually converting HTML tags into React syntax.
       */

      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React Create Element'))

      /**
       * Hooks (State in Function Components) -> State Usually Used in Class Components
       * [STATE IS A JAVASCRIPT OBJECT] [IT IS A SPECIAL PROPERTY THAT CAN BE CHANGED]
       * 
       * [THIS REFERS TO A CLASS [ES6]]
       */