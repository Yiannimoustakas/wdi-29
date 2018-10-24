var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_.each(numbers, n => console.log(n));

// Iterate through numbers and multiply each one of them by 5
// _.each(numbers, n => console.log(n*5));
const multiplied = _.map(numbers, n => n * 5 );
console.log(multiplied);

// Iterate through numbers and reduce it by adding them together
const reduced = _.reduce(numbers, (total, n) => total + n );
console.log(reduced);
// numbers.reduce((total, n) => total + n);   // ES6


// Get an array of all of the people in people that have the username "E"
const allEs = _.where(people, { username: 'E' });
console.log(allEs);

// Find the first object in people that has the id of 3
const firstIDOf3 = _.findWhere(people, {id: 3});
console.log(firstIDOf3);

// Find the first person who has an age of less than 50
const firstLessThan50 = _.find(people, p => {
  // console.log('iteration', p);
  return p.age < 50;
});
console.log(firstLessThan50);

// Get an array of all of the people with an age of over 60
const everyoneOver50 = _.filter(people, p => p.age > 50 );
console.log(everyoneOver50);

// Remove all of the people with an age less than 40
const onlyOver40s = _.filter(people, p => p.age >= 40 );
console.log(onlyOver40s);

const noOneUnder40 = _.reject(people, p => p.age < 40 );
console.log(noOneUnder40);
