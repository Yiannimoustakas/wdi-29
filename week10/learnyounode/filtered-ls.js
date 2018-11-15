
const fs = require('fs');
const pathModule = require('path');

const filteredListing = function(path, extension, callback){
  // 1. Get a listing of all files in the folder specified by 'path'
  // 2. Loop through those files, only printing the ones whose extension is 'extension'

  fs.readdir( path, function(err, list){
    if( err ){
      console.warn( err );
      return;
    }

    // console.log('files:', list );

    list.forEach(function( elem ){
      // console.log('elem:', elem);
      // console.log('ext:', pathModule.extname(elem) );
      if( ('.' + extension) === pathModule.extname(elem) ){
        console.log( elem );
      }
    });



  }); //readdir()

}; // filteredListing

// [0]  [1]            [2]              [3]
// node filtered-ls.js /Users/textchimp txt
filteredListing( process.argv[2],  process.argv[3] );
