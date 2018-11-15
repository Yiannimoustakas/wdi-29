
// ES6: "import theFunctionIWrote from './make-it-modular-module'"
const myFunc = require('./make-it-modular-module');

console.log('module', pathModule );

myFunc( 'the path', 'the ext', function( err, data ){

  if( err ){
    console.warn( 'error!', err );
    return;
  }

  //  no error!
  console.log( 'data:', data );


});
