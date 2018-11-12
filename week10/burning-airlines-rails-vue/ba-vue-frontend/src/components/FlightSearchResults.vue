<template>
<div>
  <h2>Search Results for {{origin}} to {{destination}}</h2>
</div>
</template>

<script>
import axios from 'axios';
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

    axios.get(`http://localhost:3000/search/${this.origin}/${this.destination}`)
    .then( response => {
      console.log( response );
      this.flights = response.data;
    });
  },

  methods: {

  }
};
</script>

<style scoped>
</style>
