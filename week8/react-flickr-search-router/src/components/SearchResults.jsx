import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchResults extends Component {

componentDidMount(){
  // do Flickr AJAX request here and update state with results
}

  render(){
    return (
      <h2>SearchResults for { this.props.match.params.query }</h2>
    );
  }
}

export default SearchResults;
