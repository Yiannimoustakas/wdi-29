// Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.
//
const fs = require('fs');
const fileContents = fs.readFileSync( process.argv[2] );
const fileContentsString = fileContents.toString();
const lineCount = fileContentsString.split("\n").length - 1;
console.log( lineCount );


// console.log( fs.readFileSync(process.argv[2]).toString().split("\n").length - 1  );


// Our program needs to read a file synchronously, i.e. using a method that will WAIT (block)
// until it has finished its job before giving us a result
// This usually means a callback function is not required


//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]). You do not need to make
//   your own test file.
