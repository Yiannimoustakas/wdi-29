import React, { PureComponent } from 'react';

class Calculator extends PureComponent {

  // Ruby: def initialise()
  constructor(){
    super();  // run the constructor() function of the parent class, i.e. PureComponent

    console.log('constructor() this:', this);

    this.state = {
      numA: 0,
      numB: 0
    };

    // These methods are event handler callbacks, so they lose the
    // value of 'this' we want them to have (i.e., the current instance
    // of the Calculator class, the current component object).
    // To make sure the methods have the correct value for 'this',
    // we create a new version of each method using .bind(), which
    // forces them to have a specific value for 'this': in this case,
    // the correct value of 'this' as it is right here, in the constructor
    // function.
    this.updateNumA = this.updateNumA.bind( this );
    this.updateNumB = this.updateNumB.bind( this );

  }

  updateNumA( event ){
    console.log('typed into input A!', event.target.value);
    // console.log('updateNumA() this:', this);

    // To change state in React, you have to use the this.setState() method:
    this.setState({ numA: parseFloat(event.target.value) });
    // console.log( this.state ); // DOESN'T WORK - you get the old value of the state
    // .... this is asynchronous Javascript! Things take time to run!
  }

  updateNumB( event ){
    const newNumB = parseFloat(event.target.value);
    this.setState({ numB: newNumB });
  }

  render(){

    // const numA = this.state.numA;
    // const numB = this.state.numB;

    // ES6 object destructuring
    const {numA, numB} = this.state;

    return (
      <div>
        <h1>Calculator</h1>

        <input type="text" onChange={ this.updateNumA } />
        <input type="text" onChange={ this.updateNumB } />

        <h2>Results:</h2>
        <p>{numA} + {numB} = { numA + numB }</p>
        <p>{numA} - {numB} = { numA - numB }</p>
        <p>{numA} * {numB} = { numA * numB }</p>
        <p>{numA} / {numB} = { numA / numB }</p>

      </div>
    );
  }

}

export default Calculator;
