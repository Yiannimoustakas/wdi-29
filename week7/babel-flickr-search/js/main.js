'use strict';

var pageCount = 1; // which page of results are we loading?

var $searchResultsDiv = void 0; // make this variable global, but don't set a value yet

$(document).ready(function () {

  // Focus the cursor into the search text field as
  // soon as the page loads - so users can immediately
  // start typing their search query
  // (or when debugging, so we can just press enter
  // to submit the search, as soon as the page loads)
  $('#searchText').focus();

  // some comment AGAIN

  $searchResultsDiv = $('#searchResults'); // Set the value using jQuery, once the DOM has loaded

  // Add a keypress handler to let us hide the fullscreen
  // display by pressing 'Esc'
  $(document).on('keydown', function (ev) {
    // console.log( ev.key );
    if (ev.key === 'Escape') {
      $('#fullscreen').fadeOut(500);
    }
  });

  $(window).on('scroll', function () {
    // console.log('document height', $(document).height() );
    // console.log('window height', $(window).height() );
    // console.log('scrolltop:', $(window).scrollTop() );

    var scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    // console.log('scrollBottom:', scrollBottom);

    if (scrollBottom < 100) {
      // console.log('loading next page...');
      var query = $('#searchText').val();
      // searchFlickr( query );
      // Run the throttled version, which is guaranteed not to run too often
      throttledSearchFlickr(query);
    }
  });

  // Step 1.
  // Respond to the form being submitted
  $('#searchForm').on('submit', function () {

    $searchResultsDiv.empty(); // clear any old search results

    // Get the search text entered into the text field
    var query = $('#searchText').val();

    // Step 2.
    // Call search function to perform AJAX query,
    // passing it the search text from the form
    searchFlickr(query);

    // Do not actually submit this form
    // (because that just causes a reload, in this case)
    return false;
  }); // form submit handler

  // Step 3.
  // Create function which takes the query text and performs
  // an AJAX request to the Flickr API with it
  var searchFlickr = function searchFlickr(queryText) {
    console.log('searchFlickr(): ' + queryText, pageCount);

    var BASE_URL = 'https://api.flickr.com/services/rest/';

    // $.getJSON lets you give an object as an optional second arg, whose key-value pairs
    // will be turned into an equivalent querystring and appended to the URL
    $.getJSON(BASE_URL, {
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      method: 'flickr.photos.search',
      format: 'json',
      nojsoncallback: 1,
      text: queryText,
      page: pageCount
    }).done(displaySearchResults) // Register another function to handle the successful response
    .fail(console.warn);

    pageCount += 1;
  }; // searchFlickr()

  // Make a throttled version of searchFlickr() using Underscore;
  // this throttled version of searchFlickr() will be guaranteed to run no
  // more often than every 5 seconds - no matter how often we actually call it
  // (we will be calling it in the scroll event handler, when the user hits
  // the bottom of the page)
  var throttledSearchFlickr = _.throttle(searchFlickr, 5000);

  // Step 4.
  // Create the function which is called by the .done() in our AJAX query above;
  // this function takes the response data as its argument, loops through it,
  // and renders it to the page
  var displaySearchResults = function displaySearchResults(response) {
    // console.log('response: ', response);

    response.photos.photo.forEach(function (foto) {

      var thumbnailURL = generateImageURL(foto);
      $('<img>').attr('src', thumbnailURL).on('click', function () {
        // Because this click handler is defined INSIDE the forEach callback function,
        // it gets access to all the variables already defined in the forEach callback,
        // including the current 'foto' object - even though the forEach loop is long
        // finished by the time any of these click handler functions actually run!
        // (This remembering or capturing of variables defined in the enclosing scope
        // is called a 'closure')
        // The downside is that each image object we create causes a new, unique
        // click handler function to be created, i.e. 100 click functions for 100 images
        displayFullscreenImage(foto);
      }).appendTo($searchResultsDiv);
    }); // forEach
  }; // displaySearchResults()


  var displayFullscreenImage = function displayFullscreenImage(photo) {
    console.log(photo);
    var fullsizeURL = generateImageURL(photo, 'c');
    console.log(fullsizeURL);

    // background-image: url(http://fillmurray.com/400/300);
    $('#fullscreen').css('background-image', 'url(' + fullsizeURL + ')').show();
  };

  var generateImageURL = function generateImageURL(photo) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';

    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_' + size + '.jpg';
  };
}); // $(document).ready()