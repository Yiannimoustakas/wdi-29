
console.log('JS loaded!');

// let variableName = 234;


const dog = {
  name: 'Ruby',
  age: 2,
  breed: 'Toller',
  friends: ['Lottie', 'Bonnie', 'Jess']
};



const person = {
  name: 'Linna',
  age: 26,
  address: 'Ryde',
  isStudent: false,
  // hobby1: 'surfing',
  // hobby2: 'skydiving'
  hobbies: [ 'surfing', 'skydiving', 'serial killing'  ]
};

// for( let i = 0; i < person.hobbies.length; i++ ){
//   console.log('INSIDE LOOP!');
//   console.log( person.hobbies[i] );
// }

for( let k in person ){
  console.log(`${k}:  ${ person[ k ] } `);
  if( person[k] === 26 ){
    console.log(`Found value 26, it lives at key ${k}`);
  }
}
