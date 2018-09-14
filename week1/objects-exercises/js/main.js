console.log('JS loaded!');

// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


const books = [
  {
    title: "The Hitch-Hiker's Guide to the Galaxy",
    author: "Douglas Adams",
    alreadyRead: true
  },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", alreadyRead: true },
  { title: "The Dispossessed",    author: "Ursula Le Guin",     alreadyRead: true },
  { title: "Identifying Wood",    author: "various",            alreadyRead: false }
];

for( let i = 0; i < books.length; i++ ){
  const currentBook = books[i];

  let readStatus = 'You still need to read';
  if( currentBook.alreadyRead ) {
    readStatus = 'You have already read'
  }

  console.log(`${readStatus} "${ currentBook.title }" by ${ currentBook.author }`);
} // for



// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {
  title: 'Butterscotch',
  servings: 3,
  ingredients: ['butter', 'scotch', 'sugar']
};

console.log( recipe.title );
console.log(`Serves: ${ recipe.servings }`);
console.log('Ingredients:');
// console.log( recipe.ingredients.join('\n') );
for( let i = 0; i < recipe.ingredients.length; i++ ){
  console.log( recipe.ingredients[i] );
}



// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

const favouriteMovie = {
  title: 'Inherent Vice',
  duration: 125,
  stars: ['Joaquim Phoenix', 'Josh Brolin', 'Owen Wilson'],
  printInfo: function(){
    // 'this' refers to the object which this function is inside of (the object this function is a method of)
    console.log(`${this.title} lasts for ${this.duration} minutes.`);
    console.log(`Stars: ${ this.stars.join(', ') }.`);
  }
};


const movieInfo = function( movie ){
  console.log('=========== Movie Info ==============');
  console.log(`${ movie.title } lasts for ${ movie.duration } minutes.`);
  console.log(`Stars: ${ movie.stars.join(', ') }`);
};

movieInfo( favouriteMovie );  // pass a movie into the standalone info function

// The movieInfo function expects to be passed an object with a 'title' property which is a string,
// a 'duration' property which is an integer, and a 'stars' property which is an array of strings.
// Instead of passing it a variable containing such an object, as we've done above, we can also
// just create an object 'on the fly', at the last moment, i.e. define an object literal right inside
// the parentheses of the call to movieInfo(), as long as it has the expected   properties:
movieInfo({
  title: 'Pineapple Express',
  duration: 420,
  stars: ['Seth Rogen', 'James Franco']
});


favouriteMovie.printInfo();   // use the built-in function (method) of the object
