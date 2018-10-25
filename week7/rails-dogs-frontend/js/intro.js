console.log('Loaded.');

$(document).ready(function(){

  const numbersURL = 'http://numbersapi.com/random/trivia?json';

  // xhr.onload = function(){  xhr.response };

  // $.ajax({
  //   url: numbersURL,
  //   method: 'get',
  //   // dataType: 'json', // default is 'intelligent guess'
  // })
  // $.get(numbersURL)
  // $.post(numbersURL)


  $.getJSON(numbersURL)
  .done(function( response ){
    // This callback only runs if the request was successful (status == 200)
    console.log( response.text );
  })
  .fail(function( err ){
    // This callback only runs if the request was successful (status == 404 or network error)
    console.warn( err.statusText );
  });
  // .always(function( data ){
  //   console.log('This will always run, after the .done() or .fail()');
  // });


});  // $(document).ready()
