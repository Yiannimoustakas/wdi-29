
import React, {Component} from 'react';
// import React from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';


const Gallery = props => {
  if ( props.images.length > 0 ) {
    return (
      <div className="gallery">
        <h2>Search Results</h2>
        {
          props.images.map( generateImageTag )
        }
      </div>
    );
  } else {
    return <p>Please enter a search term above...</p>;
  }
};

const generateImageTag = photo => {
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
  return <img src={url} alt={photo.title}/>;
};


class FlickrSearch extends Component {

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


  }

  render(){

    // const gallery = [];
    // for( let i = 0; i < this.state.photos.length; i++ ){
    //   const p = this.state.photos[i];
    //   gallery.push( <img src={p.url} /> );
    // }

    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSubmit={ this.performSearch } />
        <hr />

        {/*
            This is a multi-line comment in JSX
            We can't use a for loop in JSX curly brackets in React, because
            a for loop is a statement, and only expressions are allowed inside curlies.
            Instead we can use .map(), which takes our array of photo objects, and returns
            an array of JSX elements - which get rendered onto the page, one after the other.
            i.e.:
            this.state.photos.map( p => <img key={p.url} src={p.url} alt={p.name} /> )
        */}


          <Gallery images={this.state.photos} />

      </div>
    );
  }
}

export default FlickrSearch;














// ES6 Destructuring of objects & arrays:
//
// const obj = {
//   a: 1,
//   b: 2
// };
//
// const {b, a} = obj;
//
// console.log(a);
//
// const randomNums = getRandomNumbersAsArray();
// const firstNum = randomNums[0];
// const secondNum = randomNums[1];
// const [ firstNum, secondNum, ...remaining ] = getRandomNumbersAsArray();
//
// console.log(firstNum);
