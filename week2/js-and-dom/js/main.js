
const hello = function(){
  console.log('Hello!');
};

const goodbye = function(){
  console.log('Goodbye!');
};

const runNicely = function( functionToRunNicely ){

  console.log('Hello, I am about to run your function, I hope that is to your liking sir!');

  functionToRunNicely();

  console.log('I sincerely hope that went well for you! Thank you for letting me help you to run your function, and have a nice day.');

};


runNicely( hello );

runNicely( goodbye );

runNicely(function(){
  console.log('As many lines as we want!');
  console.log('Anonymous function!');
});


runNicely(function(){
  console.log('A different anonymous function');
});
