import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const LOGIN_URL   = `${BASE_URL}/user_token`;
const BOOKING_URL = `${BASE_URL}/booking`;
const FLIGHT_URL  = `${BASE_URL}/flights/`;
const SEARCH_URL  = `${BASE_URL}/search/`;

export default {

  performLogin(email, password){
    return axios.post(LOGIN_URL, {auth: { email, password }});
  },

  makeBooking(row, col, flight_id){
    return axios.post(BOOKING_URL, { row, col, flight_id });
  },

  getFlightDetails( id ){
    return axios.get(FLIGHT_URL + id);
  },

  getFlightSearchResults(origin, destination){
    return axios.get(`${SEARCH_URL}${origin}/${destination}`);
  }

};
