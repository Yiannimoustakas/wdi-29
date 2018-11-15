const fs = require('fs');
const pathModule = require('path');


const myFunc = function(path, ext, callback){
  // console.log('inside myFunc', path, ext, callback);

  fs.readdir( path, function(err, list){
    if( err ){
      // console.warn( err );
      // return;
      return callback( err );
    }

    // if there is no error, set the first argument of the given callback as null to indicate no errors, and pass the list of filenames back as the second argument
    callback( null, list );

  });  // readdir()

};

module.exports = myFunc;
// ES6: 'export default myFunc;'
