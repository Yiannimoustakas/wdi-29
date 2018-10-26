
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// like Ruby require_relative '../lib/Bank'

// This makes the function 'HelloWorld',
// which is the default export from
// HelloWorld.js, available as a function
// in this file, also called 'HelloWorld'
import HelloWorld from './HelloWorld';
import HelloUser  from './HelloUser';

class App extends Component {
  render() {

    return (
      <div className="myApp">
        <HelloWorld />
        <HelloUser name="Bill" imgWidth="200" imgHeight="200" />
        <HelloUser name="Linna" imgWidth="150" imgHeight="100"/>
      </div>
    );

    // return <HelloWorld />;

    // return (
    //   <div>
    //     <div>Hello World!</div>
    //     <p>Welcome to my app!</p>
    //     <img className="image" src="http://fillmurray.com/600/600" />
    //   </div>
    // );

    // return React.createElement('div', null, 'Hello World!');

  }
}

export default App;
