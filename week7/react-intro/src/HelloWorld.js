// import the core functionality of React into
// this file, so JSX works properly
import React from 'react';

// "Pure functional" component:
// just a function which returns some JSX code to be rendered on the page
const HelloWorld = function(){
  return (
    <div className="hello">
      <h1>Hello from the HelloWorld component!</h1>
      <img src="http://fillmurray.com/300/200" />
    </div>
  );
};

// Describe the main thing which this file exports to the world
// (i.e., to be used in an 'import' statement in another file)
export default HelloWorld;
