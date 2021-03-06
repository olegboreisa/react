import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person.js'

const App = props => {
    const [ anyNamePersonState, setPersonState] = useState ({
      person: [
        { name: 'Oleg', age: 26 },
        { name: 'Donatas', age: 27 }
      ]
    });

    const switchNameHandler = () => {
      setPersonState({
        person: [
        { name: 'Olegas', age: 26 },
        { name: 'Donis', age: 27 }
      ] 
    });
  };
  // [FUNCTIONAL COMPONENT DOES NOT MANUAL MERGE PREVIOUS STATE THAT A NOT CHANGED!]

  // const [otherState, setOtherState] = useState({otherState: 'some other value'}) or ('some other value');

    return (
      <div className="App">
          <h1>Hi, I am React App</h1>
          <p>This is actually working!</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={anyNamePersonState.person[0].name} years={anyNamePersonState.person[0].age} />
          <Person name={anyNamePersonState.person[1].name} years={anyNamePersonState.person[1].age} />
      </div> 
    );
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
       * 
       * DO NOT PUT () on the Click Event because it will be executed during runtime not on the exact click!
       */


       /**
        *   state = {
              person: [
                { name: 'Oleg', age: 26 },
                { name: 'Donatas', age: 27 }
              ]
            }
            
            switchNameHandler = () => {
              //console.log('Was clicked!')
              //  DON'T DO THIS: this.state.person[0].name = 'Olegas';
              this.setState({
                person: [
                { name: 'Olegas', age: 26 },
                { name: 'Donis', age: 27 }
              ] 
            })
            }
        */

        /**
         * In the functional component we do not need to use render method. We are also using hooks to manage state. [useState]
         */