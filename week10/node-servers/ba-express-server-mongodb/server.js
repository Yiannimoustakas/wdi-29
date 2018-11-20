const express = require('express');
const app = express();

const cors = require('cors');
app.use( cors() );

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

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

    const reservationsLookup = {};

    results.reservations.forEach( res => {
      // add each reservation from the flight's array of reservations
      // as a key of our lookup table
      // 'res' looks like: { 'row':10, 'col': 3 }
      reservationsLookup[`${res.row}-${res.col}`] = 1;
    });

    res.json({
      flight: results,
      reservations: reservationsLookup, // send the reservations lookup here
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

  db.collection('flights').updateOne(
    // find the document to update:
    { flight_number: req.body.flight_id },
    // specify the new fields for the document:
    {
      $push: {
        reservations: {
          row: req.body.row,
          col: req.body.col
        }
      }
    },
    // callback to run when the update is finished:
    (err, result) => {
      res.json( result );
    }
  );

});
