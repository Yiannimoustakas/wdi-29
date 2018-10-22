
console.log('Loaded!');

const sayHello = function(){
  console.log('Hello from inside sayHello()!');
};

// This function takes another function as an argument
const runNicely = function( someOtherFunction ){
  console.log('Hi! I am excited to run your function for you! What an honour!');

  someOtherFunction(); // Actually run the function that was passed in

  console.log('It was such a pleasure to run your function! Have a wonderful day!');
};

// Call runNicely, passing in the predefined sayHello
// NOTE: THIS WON'T WORK: runNicely( sayHello() );  // why not?
runNicely( sayHello );

const arr = [1,10,20,50,100,7,1000];

// In Ruby we can write:
// arr.each do |el|
//   puts el
// end


const each = function( array, callback ){
  // Loop through the array that was given as the first arg
  for( let i = 0; i < array.length; i++ ){
    // Call the callback function given as the second arg,
    // passing in to it the current element from the array,
    // as its only argument:
    callback( array[i] );
  }
};

// The way we use our new handmade 'each' is pretty close to ruby:
each(arr, function(elem){
  console.log(elem);
});


// But even closer would be to use the Array prototype to add it as a method
// available on all arrays... then we can do:
// arr.each(function(el){
//   console.log(el);
// });
// i.e., call the method on the array, instead of passing the
// array into the each function. But to do that, we need to use 'this'
// to refer to the array on which the method is called:

Array.prototype.each = function( callback ){
  for( let i = 0; i < this.length; i++ ){
    callback( this[i] );
  }
};


/////// Advanced:
// This version of 'each' checks the type of its first arg,
// and uses the correct specific kind of loop for an Array or for an Object
// Note it also passes more arguments to the callback
const each = function( collection, callback ){

  if( collection instanceof Array ){
    for( let i = 0; i < collection.length; i++ ){
      // Call the callback we were given, passing in the elem value and index as args
      callback( collection[i], i );
    }
  } else {
    // assume we have been passed an object
    const keys = Object.keys( collection );
    for( let i = 0; i < keys.length; i++ ){
      const key = keys[i];
      // Call the callback we were given, passing in the key and value as args
      callback( key, collection[key] );
    }
  }

};


// each(obj, function( k, v ){
//   console.log(`key: ${ k },  val: ${ v }`);
// });

// each(arr, function( elem ){
//   console.log( elem );
// });
