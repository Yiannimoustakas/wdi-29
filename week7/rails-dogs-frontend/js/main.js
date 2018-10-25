
$(document).ready( () => {

  const DOGS_URL = 'http://localhost:3000/dogs';

  $('#newDogForm').on('submit', () => {
    // Perform a POST Ajax request to our Rails server,
    // passing the form data as the second argument object
    $.post(DOGS_URL, {
      name: $('#name').val(),
      age: $('#age').val(),
      roundness: $('#roundness').val(),
      image: $('#image').val()
    })
    .done( response => {
      // Use the object returned from the 'create' action to append
      // a new item to our list of dogs, keeping it up to date with what we added
      $('<li>').html(`${response.name} (${response.age})`).appendTo('#dogList')
    })
    .fail( console.warn );

    return false; // don't submit the form
  });

  const displayDogs = response => {
    response.forEach( dog => {
      // const $img = $('<img>', {src: dog.image});
      $('<li>')
      .html(`${ dog.name } (${ dog.age })`)
      // .append( $img )
      .appendTo('#dogList');
    });
  };

  $.getJSON(DOGS_URL)
  .done( displayDogs )
  .fail( console.warn );

});  // $(document).ready()
