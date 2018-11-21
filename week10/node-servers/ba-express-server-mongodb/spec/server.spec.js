
const Request = require('request');

describe('Server', () => {

  let server;
  beforeAll( done => {
    server = require('../server');
    done();
  });

  afterAll( () => {
    server.close(); // shut down the server when we're finished testing
  });

  describe('GET /', () => {

    const response = {};

    beforeAll( done => {
      Request.get('http://localhost:3000/', (error, res, body) => {
        response.status =  res.statusCode;
        response.body   = body;
        done();  // the tests won't begin until we call done() to signal that we're ready
      });
    });

    it('returns an HTTP status 200 success', () => {
      expect( response.status ).toBe( 200 );
    });

    it('should return the correct body content', () => {
      expect( response.body ).toBe('Hello World!');
    });

  }); // GET /

  describe('GET /flights JSON', () => {

    const response = {};
    beforeAll( done => {
      Request.get('http://localhost:3000/flights', (error, res, body) => {
        response.status =  res.statusCode;
        response.body   = body;
        response.data   = JSON.parse( body );
        done();  // the tests won't begin until we call done() to signal that we're ready
      });
    });

    it('should return an HTTP status 200', () => {
      expect( response.status ).toBe( 200 );
    });

    it('returns a valid JSON result with the correct number of flights', () => {
      // console.log( response.data );
      expect( response.data.length ).toBe( 3 );
    });

    it('should return the correct list of flights', () => {
      expect( response.data[0].flight_number ).toBe( '123' );
    });


  }); // GET /flights JSON

}); // describe 'Server'
