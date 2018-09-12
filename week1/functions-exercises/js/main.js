
console.log('JS loaded!');


//
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


console.log('Fortune Teller');

const tellFortune = function( numberOfChildren, partnersName, geoLocation, jobTitle ){
  return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} children.`;
};

console.log( tellFortune( 1, 'Debbie', 'Hawaii', 'pro surfer' ) );

const fortune = tellFortune( 7, 'Clarence', 'Ulan Batur', 'miner' );
console.log( fortune );

// console.log( fortune );

// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function( dogAge, conversionRate ){
  // const humanAge = dogAge * 7;
  return `Your doggie is ${ dogAge * conversionRate } years old in dog years!`;
};

console.log( calculateDogAge(1, 7)   );
console.log( calculateDogAge(2, 10)  );
console.log( calculateDogAge(5, 100) );








// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

console.log('Snack Calulator');

// const yearsRemaining = maximumAge - currentAge;
// const amountPerYear  = amountPerDay * 365.25;
//
// const totalSnacksRequired = yearsRemaining * amountPerYear;

const calculateSupply = function( currentAge, amountPerDay ){
  const maximumAge = 90;
  const yearsRemaining = maximumAge - currentAge;
  const amountPerYear  = amountPerDay * 365.25;
  const totalSnacksRequired = yearsRemaining * amountPerYear;

  return `You will need a total of ${ Math.round(totalSnacksRequired) } to last you until the ripe old age of ${maximumAge}.`;
};

console.log( calculateSupply(50, 10) );
console.log( calculateSupply(20, 1) );
console.log( calculateSupply(90, 10) );
console.log( calculateSupply(80, 11.333) );


// The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

console.log('Geometrizer');

const calcCircumference = function( radius ){
  return 2 * Math.PI * radius;
};

const calcArea = function( radius ){
  return Math.PI * radius**2;
};

console.log(`The circumference is ${calcCircumference(70).toFixed(2) }, and the area is ${calcArea(70)}`);

// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
//
// Convert it to celsius and output "NN°F is NN°C."

console.log('Temperature Converter');

const celsiusToFahrenheit = function( temp ){
  return (temp * 1.8) + 32;
}
console.log(`27˚C is ${celsiusToFahrenheit(27).toFixed(2)}˚F.`);

const fahrenheitToCelsius = function( temp ){
  return (temp - 32) / 1.8;
};
console.log(`80.6˚F is ${fahrenheitToCelsius(80.6).toFixed(2)}˚C.`);
