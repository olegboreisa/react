import React from 'react'
// ES6 JavaScript
const person = (props) => {
    return  <p>I am a {props.name} and I am {props.years} old! 
            And {Math.floor(Math.random() * 30)}</p>
};


export default person;

// Calling JavaScript Functions using in TAGS {};
// When Using Class Based Components IT IS USED {this.props} etc..