import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render () {
    return (
      <>
      <div className="App">
          <h1>Hi</h1>
      </div>
      <Person name="Oleg" years="26" />
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