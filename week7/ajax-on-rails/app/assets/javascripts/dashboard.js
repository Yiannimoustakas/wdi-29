$(document).ready(function(){

  // $('#output').html('test string');

  setInterval(function(){
    $.getJSON('http://10.1.6.25:3000/cpu_hog.json')
    .done(function( response ){
      $('#output').html( response.data );
    });
  }, 500);

});
