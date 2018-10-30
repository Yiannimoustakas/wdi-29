import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const generateImageTag = photo => {
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
  return <img src={url} alt={photo.title}/>;
};

class SearchResults extends Component {

  // This is a built-in 'lifecycle method': if you define it, it will
  // be run when this component is actually added to the DOM
  componentDidMount(){
    // do Flickr AJAX request here and update state with results
    this.performSearch( this.props.match.params.query );
  }

  constructor(){
    super();

    this.state = {
      photos: []
    };

    this.performSearch = this.performSearch.bind( this );
  }


  performSearch( query ){
    console.log( 'peformSearch(): ', query, this );

    const URL = 'https://api.flickr.com/services/rest/';
    const flickrParams = {
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      method: 'flickr.photos.search',
      nojsoncallback: 1,
      format: 'json',
      text: query
    };

    axios.get( URL, {params: flickrParams} )
    .then( response => {
      // Like jQuery's .done() - run the callback function when the response is ready,
      // i.e. SUCCESS
      console.log('response:', response.data.photos.photo);
      this.setState({
        photos: response.data.photos.photo
      });
    })
    .catch( err => {
      // Like jQuery's .fail() - this callback is run if the request FAILS
      console.warn(err);
    });
    // // This callback always runs, after a success or a fail
    // .then( data => console.log('finally:', data) );

  } // performSearch()


  render(){
    return (
      <div>
        <h2>SearchResults for { this.props.match.params.query }</h2>

        {
          this.state.photos.map( p => generateImageTag(p) )
        }

      </div>
    );
  }
}

export default SearchResults;
