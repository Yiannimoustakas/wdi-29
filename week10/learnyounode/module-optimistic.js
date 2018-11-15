const fs = require('fs');
// const pathModule = require('path');


const myFunc = function(path, ext, callback){

  fs.readdir( path, callback );

  //   function(err, list){
  //   callback( null, list );
  // });  // readdir()

  console.log('path: ', path)
  console.log('ext: ', ext)
  console.log('callback: ', callback);
  callback( null, 'some data');
};

myFunc( '.', 'the ext', function( err, data ){
  console.log('in the callback passed to myFunc!');
  console.log('data is: ', data);
});
