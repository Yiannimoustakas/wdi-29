<template>
<div>
  <h2>Login</h2>
  <input type="text" v-model="email" placeholder="Email">
  <input type="text" v-model="password" placeholder="Password">
  <button v-on:click="doLogin">Login</button>
  <div v-if="error" class="loginError">{{ error }}</div>
</div>
</template>

<script>
  import axios from 'axios';
  const SERVER_AUTH_TOKEN_URL = 'http://localhost:3000/user_token';

  export default {
    name: 'Login',
    data(){
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
      doLogin(){
        console.log('doLogin()', this.email, this.password);
        axios.post(SERVER_AUTH_TOKEN_URL, {
          auth: { email: this.email, password: this.password }
        })
        .then( response => {
          console.log('response:', response.data.jwt );

          // We need to add the token to the axios headers here EVEN THOUGH we do it happens in the
          // created() method of the App component too; we need it here because the App component
          // is already mounted by now, so its created() method has already run (so if we don't
          // do it first here, we won't actually have the header set after we redirect to the
          // search page).
          // We WILL already have the header set when we reload the page and the App component mounts again.
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;

          // Store the response JWT token (which proves our login credentials were valid)
          // in the browser's localStorage system, which will let us access it from
          // different pages, and also from different browser sessions
          if( 'localStorage' in window ){
            localStorage.setItem('authToken', response.data.jwt);
          }

          // redirect to the search page
          this.$router.push({ name: 'flightSearch' });

        })
        .catch( err => {
          console.warn('login error:', err );
          this.error = 'Incorrect email or password.'
        });

      }
    }
  };
</script>

<style scoped>
.loginError {
  color: rgb(255, 134, 8);
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
