// fake DB
const flights = [
  {
    id: 1,
    flight_number: '123',
    departure_date_formatted: 'Tue 25 December, 08:00am',
    origin: 'SYD',
    destination: 'SFO',
    plane: { name: '737', rows: 40, cols: 4 }
  },
  {
    id: 2,
    flight_number: '456',
    departure_date_formatted: 'Wed 26 December, 02:00pm',
    origin: 'SYD',
    destination: 'SFO',
    plane: { name: '747', rows: 60, cols: 6 }
  },
  {
    id: 3,
    flight_number: '789',
    departure_date_formatted: 'Tue 30 December, 09:00am',
    origin: 'SYD',
    destination: 'SIN',
    plane: { name: '757', rows: 80, cols: 8 }
  },
];

// Make reservations work by populating these objects with the right data
const reservations = {};
// Same
const user_reservations = {};


const express = require('express');
const cors = require('cors');
const app = express();

// allow cross-origin requests (prevent CORS browser errors)
// i.e. we are making AJAX requests from localhost:8082/ to localhost:3000/
app.use( cors() );

// https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

// listen for GET requests on the '/' path of this server
app.get('/', (req, res) => {
  // handle the request by sending a response
  console.log(req.query);

  // res.send('<h1>Hello World from Node.js Express</h1>');

  res.json( req.query ); // forward the querystring object back the the browser as JSON
});

// GET /flights
app.get('/flights', (req, res) => {
  res.json([
    {id: 1, number: 'BA123'},
    {id: 2, number: 'BA456'}
  ]);
});

// GET /flights/:id  (show page)
app.get('/flights/:id', (req, res) => {
  console.log( req.params );

  const requestedID = parseInt( req.params.id );

  // find the flight object from the array whose id field matches the ID from the URL
  const flight = flights.find( f => f.id === requestedID );

  res.json({ flight, reservations, user_reservations });
});

// i.e. GET /flights/SYD/SFO, we should have req.params.origin === 'SYD', req.params.destination === 'SFO'
app.get('/search/:origin/:destination', (req, res) => {
  // console.log( req.params );

  const {origin, destination} = req.params;  // ES6 object destructuring
  // ...instead of...
  // const origin = req.params.origin;
  // const destination = req.params.destination;

  const results = flights.filter( f => f.origin === origin && f.destination === destination );
  res.json( results );
});


app.post('/booking', (req, res) => {
  console.log('POST to /booking', req.body);

});
