
let hue = 0;
let lastX = 0;

const createBlob = function( x, y ){
  console.log('createBlob(): ', x, y);

  const $blob = $('<div class="blob"></div>'); //.addClass('blob');
  // console.log( $blob );

  hue++; // add 1 to hue

  const colour = `hsla(${hue}, 100%, 50%)`

  let xVelocity = x - lastX;
  xVelocity = Math.abs( xVelocity );
  lastX = x;

  let size = xVelocity;

  $blob.css({
    top:  (y - size/2) + 'px',
    left: (x - size/2) + 'px',
    backgroundColor: colour,
    width: size + 'px',
    height: size + 'px',
  });

  $('body').append( $blob );  // append the $blob element to the page

  if( Math.random() > 0.5 ){
    // this will happen approx 50% of the time
    size = -window.innerHeight - size;
  }

  $blob.animate(
    { top: -size + 'px' },
    1000 + (Math.random() * 4000),  // take at least a second, but maybe up to 5 seconds, randomly
    function(){ $(this).remove(); }
  );

}; // end of createBlob()


$(document).ready(function(){

  $(document).on('mousemove', function( event ){
    // console.log(`clicked at ${event.clientX}, ${event.clientY}`);
    if( event.shiftKey ){
      // only draw a blob if the shift key was held when moving
      createBlob(event.clientX, event.clientY);
    }
  });


  $(document).on('keypress', function( event ){
    if( event.key === ' ' ){
        $('div').remove(); // clear the screen when spacebar is pressed
    }
  });

}); // end of $(document).ready();
