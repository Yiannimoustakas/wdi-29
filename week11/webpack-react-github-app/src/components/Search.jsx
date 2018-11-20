import React, { Component } from 'react';

class Search extends Component {

  constructor(props){
    super(props);

    // set up a 'ref' to the input field so we can pull its value out
    // (requires "ref={ this.inputRef }" inside the input tag )
    this.inputRef = React.createRef();

    // this.handleInput = this.handleInput.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  // handleInput( ){
  //   // console.log( 'input', event.target.value );
  //   console.log( this.inputRef.current.value );
  // }

  handleSubmit( event ){
    event.preventDefault();
    const username = this.inputRef.current.value;
    // Navigate to a new React app route, using the username typed into
    // the search input; by using a ref we don't need to save the input contents
    // into state
    this.props.history.push(`/details/${username}`);
  }

  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <h2>Search by Username</h2>
        <form onSubmit={ this.handleSubmit }>
          <input ref={ this.inputRef } type="search" />
          <button>Search</button>
      </form>
      </div>
    );
  }

}

export default Search;
