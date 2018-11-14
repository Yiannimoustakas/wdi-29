<template>
<div>
  <h2>Search Results for {{origin}} to {{destination}}</h2>

  <div class="container header">
    <div>Departure Date</div>
    <div>Flight Number</div>
    <div>Plane</div>
    <div>Origin</div>
    <div>Destination</div>
  </div>

  <div class="container flightRow" v-for="flight in flights" v-on:click="gotoFlightDetails(flight.id)">
    <div>{{ flight.departure_date_formatted }}</div>
    <div>{{ flight.flight_number }}</div>
    <div>{{ flight.plane.name }}</div>
    <div>{{ flight.origin }}</div>
    <div>{{ flight.destination }}</div>
  </div><!-- container -->

</div>
</template>

<script>
import ajax from '@/lib/ajax';  // all our axios requests now happen in this library file
export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination'],
  data(){
    return {
      flights: []
    };
  },
  created(){
    // runs when the component is added to the DOM,
    // like React's componentDidMount()

    // axios.get(`http://localhost:3000/search/${this.origin}/${this.destination}`)
    ajax.getFlightSearchResults(this.origin, this.destination)
    .then( response => {
      console.log( response );
      this.flights = response.data;   // like React's "this.setState({ flights: response.data });"
    });
  },
  methods: {
    gotoFlightDetails(id){
      console.log(`/flights/${id}`);
      this.$router.push({
        name: 'flightDetails',
        params: { id }   // { id: id }
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;  /* five columns for each row, date is 2x width */
  padding-top: 8px;
  padding-bottom: 8px;
  /* border: 1px solid red; */
}
.header {
  background-color: rgb(30, 28, 101);
  color: white;
}
.flightRow{
  cursor: pointer;
}
.flightRow:hover{
  background-color: #EEEEEE;
  font-weight: bold;
}
</style>
