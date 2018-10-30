import React, { Component } from 'react';
import axios from 'axios';

import SecretsForm from './SecretsForm';

const SECRETS_URL = 'http://10.1.6.25:3000/secrets.json';

class Secrets extends Component {

  constructor(){
    super();

    this.state = {
      secrets: []
    };

    // this.saveSecret = this.saveSecret.bind( this );
  }

  componentDidMount(){
    this.fetchSecrets(); // load the secrets once when the page first loads

    // Keep checking the server every 2 seconds to see if there are any new
    // secrets to show on the page
    setInterval( () => this.fetchSecrets(), 2000 );
  }

  fetchSecrets(){

    // get the current list of secrets from the server
    axios.get( SECRETS_URL )
    .then( response => {
      console.log( response );
      this.setState({ secrets: response.data });

      // this.state.secrets = response.data;

    })
    .catch( console.warn );

  } // fetchSecrets()

  saveSecret( secret ){
    console.log('Secrets::saveSecret(): ', secret);
    console.log(this);

    // save to DB via AJAX POST
    axios.post( SECRETS_URL, { content: secret })
    .then( response => {
      // successful response from POST (i.e. secret created)
      console.log('response from POST:', response.data);

      // const newSecrets = this.state.secrets.concat( [response.data.secret] );
      // Using ES6 '...' spread parameter to combine arrays:
      this.setState({ secrets: [ response.data.secret, ...this.state.secrets ] })
    })
    .catch( console.warn );

  }

  render(){
    return (
      <div>
        <h1>Spill Yer Guts</h1>
        <h2>An app for sharing embarrassing secrets with the world.</h2>
        <SecretsForm reportSecret={ this.saveSecret } />
        <hr />
        <ul>
          { this.state.secrets.map( s => <li key={s.id}>{ s.content }</li> ) }
        </ul>
    </div>
    );
  }

}

export default Secrets;
