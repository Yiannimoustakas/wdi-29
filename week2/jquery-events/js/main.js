
const globalVar = 'hello';

const handleKeyDown = function( event ){
  console.log('a key was pressed down:', event.key);
  // event.preventDefault();
};

$(document).ready(function(){

  // $(document).on( 'keypress', handleKeyDown );

  $('input[type=text]').on( 'keyup', handleKeyDown );

  $('input[type=text]').on('focus', function(){
    console.log('input was focused...');
  });

  $('input[type=text]').on('blur', function(){
    console.log('input was blurred... please enter a valid email bla bla');
    console.log( $(this).val() );
  });

  $('form').on('submit', function(){
    console.log('Form is being submitted!');
    return false; // this stops the form from actually submitting
  });


  $('#kitty').css('position', 'relative');

  const handleImageClick = function(){
    console.log('image was clicked!');
    // $(this).attr('src', 'http://fillmurray.com/400/300');
    // $(this).slideToggle(5000);
    $(this).animate({ opacity: '0' }, 2000);
  };

  $('#kitty').on( 'click', handleImageClick );


  const mouseEnterCallback = function(){
    console.log('mouse entered image area');
  };

  const mouseLeaveCallback = function(){
    console.log('mouse has left image area');
  };

  $('#kitty').hover( mouseEnterCallback, mouseLeaveCallback );

  // const callback = function(){
  //
  // };

  $('#kitty').on('mousemove', function( event ){
    console.log( event.offsetX, event.offsetY );
  });

  $('#toggle').on('click', function(){
    $('.triple-kitty1').toggle();
  });

  $('#fade').on('click', function(){
    $('.triple-kitty2').fadeOut(3000);
  });

}); // $(document).ready();
