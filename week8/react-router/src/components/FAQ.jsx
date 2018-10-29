
import React, { Component } from 'react';

class FAQ extends Component {

  render(){
    return (
      <div className="faq">
        <h1>Welcome to the FAQ</h1>
        {
          this.props.match.params.id
          ?
          <p>You asked for FAQ { this.props.match.params.id  }</p>
          :
          <p>Choose an ID</p>
        }

      </div>
    );
  }

}

export default FAQ;
