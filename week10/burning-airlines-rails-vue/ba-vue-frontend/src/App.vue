<template>
  <div id="app">
    <h1>BUUUUURNING AIIIIIIRLIIIIIINES</h1>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  created(){
    this.setJWTHeaderFromLocalStorage();
  },
  methods: {
    setJWTHeaderFromLocalStorage(){
      if( 'localStorage' in window ){
        const jwt = localStorage.getItem('authToken');
        if( jwt ){
          // Set an Authorization header for axios, which will affect every
          // axios AJAX we make from now on - in other words, every AJAX request
          // will be reporting to Rails who the logged-in user is
          axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
        }
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
