
const $cat = $('img.cat');
$cat.css('left', '0px');

const rightEdge = window.innerWidth - $cat.width();
let catStepAmount = 5;

const hasHitRightEdge = function(left){
  return left > rightEdge;
};

const hasHitLeftEdge = function(left){
  return left <  0;
};

const catWalk = function(){
  let leftPos = parseInt( $cat.css('left') );   // first get the current position of the cat - as a number!
  leftPos += catStepAmount;  //by default, add 5 to leftPos
  $cat.css('left', `${leftPos}px`);

  if( hasHitRightEdge(leftPos) || hasHitLeftEdge(leftPos) ){
    catStepAmount *= -1;
    $cat.css('transform', `scaleX(${ Math.sign(catStepAmount) })`);
  }
}; // end of catWalk()

setInterval( catWalk, 30 );
