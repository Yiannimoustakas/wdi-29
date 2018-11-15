
const http = require('http');

// const urls = [];
// urls[0] = process.argv[2];
// urls[1] = process.argv[3];
// urls[2] = process.argv[4];
const urls = process.argv.slice(2);
// console.log(urls);

const responses = [];  // append data from each URL into the corresponding array element, as it arrives

let completedCount = 0;

urls.forEach( (url, i) => {

  responses[i] = '';

  http.get(url, response => {

    response.setEncoding('utf8'); // get data as text, not binary buffer data

    response.on('data', data => {
      responses[i] += data;
    });

    response.on('end', () => {
      // console.log(url);
      completedCount++;
      if( completedCount >= urls.length ){
        // only print out the finished collection of responses when all of them are finished
        console.log( responses.join('\n') );
      }
    });


  }); // http.get

}); // urls.forEach
