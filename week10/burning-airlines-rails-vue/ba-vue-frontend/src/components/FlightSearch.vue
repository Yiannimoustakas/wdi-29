<template>
<div>
  <h2>Search For Flights</h2>
  <div class="searchForm">

    <label>Origin:</label>
    <select v-model="origin">
      <option>Please select:</option>
      <option>SYD</option>
      <option>SFO</option>
      <option>SIN</option>
      <option>JFK</option>
    </select>


    <label>Destination:</label>
    <select v-model="destination">
      <option>Please select:</option>
      <option>SYD</option>
      <option>SFO</option>
      <option>SIN</option>
      <option>JFK</option>
    </select>

    <br>

    <button v-on:click="submitSearch">Search Flights</button>

  </div><!-- searchForm -->
</div>
</template>

<script>
export default {
  name: 'FlightSearch',
  // Vue stores state in the 'data' property, which should be a function
  // that returns a new object with your state data
  data(){
    return {
      origin: 'SYD',
      destination: 'SIN'
    };
  },
  methods: {
    submitSearch(){
      console.log('search button clicked!');
      console.log(`/search/${this.origin}/${this.destination}`);

      // navigate to a new route in our Vue app, by name
      this.$router.push({
        name: 'searchResults',
        params: {
          origin: this.origin,
          destination: this.destination
        }
      });

    }
  }
};
</script>

<style>
</style>
