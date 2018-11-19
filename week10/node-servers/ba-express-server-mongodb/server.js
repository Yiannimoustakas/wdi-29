const express = require('express');
const app = express();

const cors = require('cors');
app.use( cors() );

const MongoClient = require('mongodb').MongoClient;
let db;  // global var to store the db connection object

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
  if( err ) return console.log( err );  // return early on error
  db = client.db('ba');
});

// Start server
const server = app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

// GET /flights  (list of all flights in table)
app.get('/flights', (req, res) => {
  db.collection('flights').find().toArray( (err, results) => {
    res.json( results );
  });
});


app.get('/search/:origin/:destination', (req, res) => {
  const {origin, destination} = req.params;
  db.collection('flights').find({ origin, destination }).toArray( (err, results) => {
    res.json( results );
  });
});

app.get('/flights/:number', (req, res) => {
  console.log('/flights/:number', req.params);

  const flightNumber = req.params.number;

  db.collection('flights').findOne({ flight_number: flightNumber }, (err, results) => {

    // HOMEWORK: create the correct reservations object here, with 'row-col' as each key
    // (remember the list of reservations is now in results.reservations)

    res.json({
      flight: results,
      reservations: {}, // send the reservations lookup here
      user_reservations: {} // same
    });
  });

});

// HOMEWORK:
app.post('/booking', (req, res) => {
  console.log(req.body);

  // db.collection('flights').?????????????????????????????????????
  // update()?
  // BUT how do you add something to the array of reservations?
  // ...instead of overwriting the whole thing?
});
