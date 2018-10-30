import React, { Component } from 'react';

class SecretsForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      secret: ''
    };
  }

  handleInput( event ){
    this.setState({ secret: event.target.value })
  }

  handleSubmit( event ){
    event.preventDefault();

    // send the secret text to the parent component,
    // which will save it to the DB via an AJAX POST request
    // This is actually calling saveSecret( this.state.secret )
    // in the parent component class, Secrets
    this.props.reportSecret( this.state.secret );
  }

  render(){
    return (
      <div>
        <span>Tell us your secret: </span>
        <form onSubmit={ ev => this.handleSubmit(ev) }>
          <input type="text" style={{width: '300px'}} onChange={ ev => this.handleInput(ev) } />
          <input type="submit" value="Share" />
        </form>
      </div>
    );
  }
}

export default SecretsForm;
