import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {

  handleInput( event ){
    console.log( event.target.value );
  }

  handleSubmit( event ){
    event.preventDefault(); // prevent form submit from causing reload of page
    this.props.history.push('/search/my search query here');
  }

  render(){
    return (
      <div>
        <h2>Flickr Search</h2>
        <form onSubmit={ ev => this.handleSubmit(ev) }>
          <input type="text" onChange={ ev => this.handleInput(ev) } />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
