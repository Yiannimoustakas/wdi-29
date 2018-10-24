$(document).ready( () => {

  // Focus the cursor into the search text field as
  // soon as the page loads - so users can immediately
  // start typing their search query
  // (or when debugging, so we can just press enter
  // to submit the search, as soon as the page loads)
  $('#searchText').focus();

  const $searchResultsDiv = $('#searchResults');

  $(window).on('scroll', () => {
    // console.log('document height', $(document).height() );
    // console.log('window height', $(window).height() );
    // console.log('scrolltop:', $(window).scrollTop() );

    const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    // console.log('scrollBottom:', scrollBottom);

    if( scrollBottom < 2 ){
      console.log('loading next page...');
      const query = $('#searchText').val();
      searchFlickr( query );
    }

  });


  // Step 1.
  // Respond to the form being submitted
  $('#searchForm').on('submit', () => {

    $searchResultsDiv.empty(); // clear any old search results

    // Get the search text entered into the text field
    const query = $('#searchText').val();

    // Step 2.
    // Call search function to perform AJAX query,
    // passing it the search text from the form
    searchFlickr( query );

    // Do not actually submit this form
    // (because that just causes a reload, in this case)
    return false;
  }); // form submit handler

  // Step 3.
  // Create function which takes the query text and performs
  // an AJAX request to the Flickr API with it
  const searchFlickr = queryText => {
    console.log(`searchFlickr(): ${queryText}`);

    const BASE_URL = 'https://api.flickr.com/services/rest/';

    // $.getJSON lets you give an object as an optional second arg, whose key-value pairs
    // will be turned into an equivalent querystring and appended to the URL
    $.getJSON(BASE_URL, {
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      method: 'flickr.photos.search',
      format: 'json',
      nojsoncallback: 1,
      text: queryText
    })
    .done( displaySearchResults )  // Register another function to handle the successful response
    .fail( console.warn );

  }; // searchFlickr()

  // Step 4.
  // Create the function which is called by the .done() in our AJAX query above;
  // this function takes the response data as its argument, loops through it,
  // and renders it to the page
  const displaySearchResults = response => {
    // console.log('response: ', response);

    response.photos.photo.forEach( foto => {
      const thumbnailURL = generateImageURL( foto );
      $('<img>').attr('src', thumbnailURL).appendTo($searchResultsDiv);
    });

  }; // displaySearchResults()

  const generateImageURL = photo => {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
  };


});
