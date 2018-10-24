const bros = ['Groucho', 'Chico', 'Harpo'];

console.log('each -----------------------');

//  Ruby/jQuery style:
// _(bros).each()

// Underscore docs style:
_.each(bros, function( elem, index ){
  console.log(index, elem);
});

// ES6 native forEach:
bros.forEach(function( elem, index ){
  console.log(index, elem);
});

console.log('each for objects---------------');

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

_.each(groucho, function( val, key ){
  console.log( key, val );
});

// Doesn't work! .forEach is only defined on arrays
// groucho.forEach(function( val, key ){
//   console.log( key, val );
// });

console.log('map -----------------------');

const nums = [1, 2, 3, 4, 5];

// const squared = [];
// for( let i = 0; i < nums.length; i++ ){
//   const sq = nums[i] * nums[i];
//   squared.push( sq );
// }
console.log( squared );

// const squared = _.map(nums, function( elem ){
//   return elem * elem;
// });

const squared = _.map(nums, elem => elem * elem);
console.log( squared );

const upcaseBros = _.map(bros, bro => bro.toUpperCase());
console.log(upcaseBros);

// ES6:
const es6Squared = nums.map( elem => elem * elem );
console.log('es6:', es6Squared);

console.log('reduce -----------------------');
// aka 'inject'

// const sum = _.reduce(nums, function(acc, num){
//   return acc + num;
// });

console.log( nums );

// const sum = _.reduce(nums, (acc, num) => acc + num );
const sum = _.reduce(nums, (total, num) => {
  // Notice that the first value we get for 'num' is actually
  // the second element in the array
  // (The first element becomes the starting value of 'total')

  console.log(`total is ${total}, num is ${num}`);
  console.log(`return value will be ${total + num}`);
  return total + num;
});

console.log( sum );

// const bros = ['Groucho', 'Chico', 'Harpo'];
const brosJoined = _.reduce(bros, (joined, bro) => joined + ", " + bro);
console.log(brosJoined);

// ES6 reduce:
const es6Reduce = nums.reduce( (total, num) => total + num );
console.log('es6 reduce:', es6Reduce);

console.log('findWhere -----------------------');

const brothers = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44 },
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42 },
  {name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39 }
];

// .findWhere: just like ActiveRecord .find_by:
//   returns the first object from the array which matches the
//   specified key values

const guitarist = _.findWhere(brothers, { instrument: 'guitar' });
console.log( 'guitarist:', guitarist );
// ActiveRecord: Brother.find_by(instrument: 'guitar')

// ES6: .find  - you must specify a callback function,
//               which returns true or false to indicate a match
const es6Guitarist = brothers.find( bro => bro.instrument === 'guitar' );
console.log('es6 guitarist:', es6Guitarist);

// .where: returns ALL array elements (must be objects) whose key
//         values match those specified in the second argument:
const allGuitarists = _.where(brothers, { instrument: 'guitar' });
console.log( 'all guitarists:', allGuitarists );
// ActiveRecord: Brother.where(instrument: 'guitar')

// More general form, where a callback is given, and any test can
//  be performed:
const over40s = _.filter(brothers, bro => bro.age > 40 );
console.log( over40s );

// ES6: .filter
// const es6Guitarists = brothers.filter( bro => bro.instrument === 'guitar' );
const es6over40s = brothers.filter( bro => bro.age > 40 );
console.log('es6over40s:', es6over40s);

console.log('sorting -----------------------');

// const brothers = [
//   {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44 },
//   {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42 },
//   {name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39 }
// ];

const ageOrderedBrothers = _.sortBy(brothers, 'age');
console.log('age sorted:', ageOrderedBrothers);
// ActiveRecord: Brother.all.order_by(:age)

const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];
const groupedScores = _.groupBy(scores, n => n > 2 );
console.log('grouped scores:', groupedScores);

const data = [1, 2, 3, 5, 6, 11];

const allEven = _.every(data, n => n % 2 === 0 );
console.log('all even?: ', allEven);
// ES6 .every

const anyEven = _.some(data, n => n % 2 === 0 );
console.log('any even?: ', anyEven);
// ES6 .some: data.some(n => n % 2 === 0);

const contains5 = _.contains(data, 5);
console.log('contains 5?', contains5);
// ES6: data.includes(5);

const vices = _.pluck(brothers, 'vice');  // just for objects
console.log('vices:', vices);
// ActiveRecord: Brother.pluck(:vice)

console.log('min age: ', _.min(brothers, 'age'));
console.log('max age: ', _.max(brothers, 'age'));
