<template>
<div>
  <h2>Flight Details</h2>

  <div v-if="flight.origin">

    <div><strong>Date:</strong>: {{ flight.departure_date_formatted }}</div>
    <div><strong>Number</strong>: {{ flight.flight_number }}</div><!-- Needs to be flight.id for Rails; changed for MongoDB -->
    <div><strong>Plane</strong>: {{ flight.plane.name }}</div>
    <div><strong>Origin</strong>: {{ flight.origin }}</div>
    <div><strong>Destination</strong>: {{ flight.destination }}</div>

    <br>

    <div class="planeRow" v-for="row in flight.plane.rows">

      <div class="rowNumber">{{ row }}</div>
      <div
        class="seat"
        v-on:click="reserveSeat(row, col)"
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
  import ajax from '@/lib/ajax';  // all our axios requests now happen in this library file
  export default {
    name: 'FlightDetails',
    props: ['id'],
    data(){
      return {
        flight: {},
        reservations: {},
        user_reservations: {}
      };
    },
    created(){
      // axios.get(`http://localhost:3000/flights/${ this.id }`)
      ajax.getFlightDetails( this.id )
      .then( response => {
        console.log( response );
        this.flight = response.data.flight;  // set the AJAX response data into our state
        this.reservations = response.data.reservations;
        this.user_reservations = response.data.user_reservations;

        // create lookup table for quick reservation checking
        // this.flight.reservations.forEach( res => this.reservationLookup[`${res.row}-${res.col}`] = true );
      });
    },
    methods: {

      reserveSeat(row, col){
        console.log('reserveSeat():', row, col);

        ajax.makeBooking(row, col, this.flight.flight_number) // THIS SHOULD BE .id for RAILS! Changed it for MongoDB backend
        .then( res => {
          console.log('success:', res);
          // update user_reservations lookup so the seat changes colour in the diagram
          // this.user_reservations[`${row}-${col}`] = 1;

          // Vue can't detect addition or deletion of properties in state objects. You have to use a more explicit
          // method (like React's this.setState()) so it knows to re-render
          this.$set(this.user_reservations, `${row}-${col}`, 1);
        })
        .catch( err => {
          console.warn('error', err);
        });

      },

      seatStatus(row, col){
        // ========== for loop version: ==================
        // for( let i = 0; i < this.flight.reservations.length; i++ ){
        //   const res = this.flight.reservations[i];
        //   if( res.col === col && res.row === row ){
        //     return 'occupied';
        //   }
        // } // for
        // If we get to the end of the loop, we have confirmed that there were no
        // reservations matching this seat (otherwise we would have returned early
        // from this method), so this seat must be free
        // return 'free';
        //

        // ========= ES6 .find() version =======================
        // const found = this.flight.reservations.find( res => res.row === row && res.col === col );
        // return found ? 'occupied' : 'free';
        // // if( found ){
        // //   return 'occupied';
        // // } else {
        // //   return 'free';
        // // }

        // ======== Object lookup table version ================

        // first check if the logged-in user has booked this seat:
        if( this.user_reservations[`${row}-${col}`] ){
          return 'mine';
        }

        // if it's not booked by the current user, check if it's booked by someone else
        return this.reservations[`${row}-${col}`]  ?  'occupied' : 'free';
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
  cursor: pointer;

}
.seat:hover{
  border: 1px solid rgb(67, 176, 0);
  color: rgb(67, 176, 0);
  font-weight: bold;
}

.rowNumber {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.occupied {
  background-color: rgb(255, 155, 5);
  pointer-events: none;
}
.mine {
  background-color: rgb(67, 176, 0);
  pointer-events: none;
}
</style>
