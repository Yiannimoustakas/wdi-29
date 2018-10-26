import React, { Component } from 'react';

class Clickr extends Component {

  constructor( props ){
    super( props );

    this.state = {
      clicks: 0
    };

    console.log( 'props:', this.props );

    this.incrementClicks = this.incrementClicks.bind( this ); // use the correct value of 'this'
  }

  incrementClicks(){
    const newClicks = this.state.clicks + 1;
    // this.setState.newClicks += 1;  NO!!!!!!!!!!
    this.setState({ clicks: newClicks });
    console.log('incrementClicks(): ', newClicks);

    // Tell parent component HistoryEraser that there has been a click, and specifically,
    // how many clicks there have been in total

    // This actually calls HistoryEraser.maybeEraseHistory( newClicks );
    this.props.everyClick(  newClicks );

  }

  render(){
    return (
      <div>
        <button onClick={ this.incrementClicks }>{ this.props.message }</button>
        <p>{ this.state.clicks } clicks so far</p>
      </div>
    );
  }

}

export default Clickr;
