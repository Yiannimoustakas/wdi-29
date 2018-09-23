// This has to be a global variable
// Question: why can't it just be a local variable of the callback function?
let lastX = 0;

$(document).ready(function(){

  $(document).on('mousemove', function({clientX:x, clientY:y}){
    // What is going on with the object in the function argument above?
    // See here if you're curious:
    // https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/
    const size = 300;
    const xVel = x - lastX;
    lastX = x;
    $('<div>').css({
      top:    y - size/2, // jQuery can add the 'px'
      left:   x - size/2,
      width:  size,
      height: size,
      transform: `scale(${xVel/100})`,
    })
    .appendTo('body')
    .fadeOut(2000, function(){ $(this).remove(); });
  });

}); // $(document).ready()
