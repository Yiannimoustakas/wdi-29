<template>
<div>
  <h2>Flight Details</h2>

  <div v-if="flight.id">

    <div><strong>Date:</strong>: {{ flight.departure_date_formatted }}</div>
    <div><strong>Number</strong>: {{ flight.flight_number }}</div>
    <div><strong>Plane</strong>: {{ flight.plane.name }}</div>
    <div><strong>Origin</strong>: {{ flight.origin }}</div>
    <div><strong>Destination</strong>: {{ flight.destination }}</div>

    <br>

    <div class="planeRow" v-for="row in flight.plane.rows">

      <div class="rowNumber">{{ row }}</div>
      <div
        class="seat"
        v-bind:class="seatStatus(row, col)"
        v-for="col in flight.plane.cols">
         {{ col | toSeatLetter }}
      </div>
      <div class="rowNumber">{{ row }}</div>

    </div><!-- end of seating row -->

  </div>
  <div v-else>

    <p>Loading flight details...</p>

  </div>

</div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'FlightDetails',
    props: ['id'],
    data(){
      return {
        flight: {}
      };
    },
    created(){
      axios.get(`http://localhost:3000/flights/${ this.id }`)
      .then( response => {
        console.log( response );
        this.flight = response.data;  // set the AJAX response data into our state
      });
    },
    methods: {
      seatStatus(row, col){
        if( Math.random() > 0.5 ){
        return 'occupied';
        } else {
          return 'free';
        }
      }
    },
    filters: {
      toSeatLetter( val ){
        return String.fromCharCode(64 + val);
      }
    }
  };
</script>

<style scoped>
.seat {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #CCCCCC;
  margin-bottom: 6px;
  margin-right: 6px;
}
.rowNumber {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.occupied {
  background-color: rgb(255, 155, 5);
}
</style>
