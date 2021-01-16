import React from 'react'
// ES6 JavaScript
const person = (props) => {
    return  <p onClick={props.click}>I am a {props.name} and I am {props.years} old!  </p>
};


export default person;

// Calling JavaScript Functions using in TAGS {};
// When Using Class Based Components IT IS USED {this.props} etc.