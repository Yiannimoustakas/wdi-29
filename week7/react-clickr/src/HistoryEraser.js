import React, { Component } from 'react';
import Clickr from './Clickr';

class HistoryEraser extends Component {

  constructor(){
    super();  // call constructor() as defined in the parent class, Component

    this.state = {
      historyStillExists: true
    };

    this.maybeEraseHistory = this.maybeEraseHistory.bind( this );
  }

  maybeEraseHistory( clickCount ){
    console.log('maybeEraseHistory(): clickCount = ', clickCount);

    console.log(this);

    if( clickCount === 4 ){
      this.setState({ historyStillExists: false });
    }
  }

  render(){

    const bgColor = this.state.historyStillExists ? 'white' : 'red';

    return (
      <div style={ {backgroundColor: bgColor} }>
        <h1>HISTORY ERASER BUTTON!!!!</h1>

        <Clickr message="Possibly Erase History" everyClick={ this.maybeEraseHistory } />

        {
          this.state.historyStillExists
          ?
          <h2>All is well - history not erased.</h2>
          :
          <h2>YOU FOOL, YOU ERASED HISTORY!</h2>
        }
      </div>
    );
  }

}

export default HistoryEraser;
