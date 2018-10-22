$(document).ready(function(){

  $('#submitButton').on('click', function(){

    // get the number typed into the text input
    const numberOfInterest = $('#queryNumber').val();

    const xhr = new XMLHttpRequest();

    // THE LONG WAY: run a function whenever the 'ready state' changes, and make sure the
    // state === 4 before trying to read the response data
    // xhr.onreadystatechange = function(){
    //   // console.log(`Ready state changed: ${ xhr.readyState }`);
    //   // console.log(`Response: ${ xhr.response }`);
    //
    //   if( xhr.readyState === 4 ){
    //     console.log( 'response:',  xhr.response );
    //   }
    // };

    // THE SHORT WAY: the fuction stored in xhr.onload will run ONLY when all the data from
    // the response is available
    // xhr.onload = function(){
    //   console.log( 'response', xhr.response );
    //   const fact = JSON.parse( xhr.response );
    //   console.log( fact.number );
    //
    //   const $heading = $('<h2>').html( fact.number );
    //   $('body').append( $heading );
    //
    //   const $factPara = $('<p>').html( fact.text );
    //   $('body').append( $factPara );
    //   // $factPara.appendTo('body');
    // };
    // xhr.open('GET', 'http://numbersapi.com/random/trivia?json');

    xhr.onload = function(){
      // We get a JSON string back from the server. Use the built-in JSON.parse()
      // method to turn this string into a real JS object, with (potentially nested)
      // key-value pairs
      const fact = JSON.parse( xhr.response );
      console.log( fact.text );

      // Use jQuery to create a new <div> and set the contents to contain the response data we want
      const $output = $('<div class="result">').html( fact.text );
      $('#results').append( $output );  // actually add the new <div> to the DOM
    };

    // Set the method and URL for our request
    xhr.open('GET', `http://numbersapi.com/${ numberOfInterest }?json`);
    xhr.send(); // actually send the request

    console.log('Finished request'); // this seems to run too soon! Asynchronous Javascript!

  }); // end of $('#submitButton').on('click',...)

}); // $(document).ready()
