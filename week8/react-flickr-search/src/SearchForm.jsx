
import React, {Component} from 'react';

class SearchForm extends Component {

  constructor(props){
    super(props); // runs super() of parent class Component
    this.state = {
        query: ''
    };

    // this.handleInput = this.handleInput.bind( this );
  }

  handleInput( event ){
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit( event ){
    event.preventDefault();  // stops the form from submitting i.e. reloading the page
    console.log('submitting!', this.state.query);
    // console.log('onsubmit:', this.props.onSubmit );

    // Actually calling the 'performSearch( query )'
    // method of the parent component, FlickrSearch,
    // to report to it what the search text is:
    this.props.onSubmit( this.state.query );
  }

  render(){
    return (
      <div>
        <form onSubmit={ ev => this.handleSubmit(ev) }>
          <input type="text" onChange={ ev => this.handleInput(ev) } />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
