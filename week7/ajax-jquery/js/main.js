
const API_KEY = '24d863d54c86392e6e1df55b9a328755';

$(document).ready(function(){

  // Attach a click handler to each result <li>

  // THIS RUNS TOO SOON! It tries to attach a click handler
  // to items that don't exist yet! (The items are added later
  // in response to a search being performed)
  //
  // $('li.result').on('click', function(){

  // INSTEAD:
  // Event delegation: get the document to check if we're
  // clicking the right kind of element, AT THE TIME OF THE CLICK
  $(document).on('click', 'li.result', function(){
    $('#resultsContainer').hide();

    // clear the details for the last movie
    $('#detailsContainer span').empty();

    $('#detailsContainer').show();

    const id = $(this).attr('movie_id');
    performMovieDetailsRequest( id );
  });

  $('#query').focus(); // Focus the cursor into the search form (so we can immediately start typing)

  $('#backToSearchResults').on('click', function(){
    $('#detailsContainer').hide();
    $('#resultsContainer').show();
  });

  const performMovieDetailsRequest = function( movie_id ){
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
    $.getJSON( url )
    .done( displayMovieDetails )
    .fail(function( err ){
      console.warn( err.statusText );
    });
  }; //performMovieDetailsRequest()

  const displayMovieDetails = function( response ){
    console.log( response );
    $('#detailsContainer .title span').html(response.title);
    $('#detailsContainer .tagline span').html(response.tagline);
    $('#detailsContainer .vote span').html(response.vote_average);
    $('#detailsContainer .overview span').html(response.overview);

    let genres = [];
    response.genres.forEach(function( genre ){
      genres.push( genre.name );
    });
    const genreStrings = genres.join(', ');
    $('#detailsContainer .genres span').html(genreStrings);

    // console.log(response.revenue);
  };

  const displaySearchResults = function( response ){
    console.log('response:', response);

    // for( let i = 0; i < response.results.length; i++ ){
    //   const movie = response.results[i];
    //   console.log( movie.title, movie.id );
    // }

    // Loop over the search results, turn each into an <li> which has a
    // movie_id attribute to use when they are clicked on, and add each one to
    // the <ul> parent element on the page
    response.results.forEach(function( movie ){
      const $li = $('<li class="result">').html( movie.title ).attr('movie_id', movie.id);
      $('#searchResults').append( $li );
    });


  }; //displaySearchResults()

  const performSearch = function( searchTerm ){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;

    $.getJSON(url)
    .done( displaySearchResults ) // this will pass the response data to our displaySearchResults fn
    .fail(function( err ){
      console.warn( err.statusText );
    });
  }; // performSearch()

  $('#searchForm').on('submit', function(){
    const query = $('#query').val();

    $('#detailsContainer').hide();
    $('#searchResults').empty(); // clear the list!
    $('#resultsContainer').show();

    performSearch( query );
    return false; // stops form submitting, i.e page reload
  });

});  // $(document).ready()
