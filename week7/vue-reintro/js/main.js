// console.log('loaded!');

Vue.component('dogs-form', {
  // In a vue component (which might render lots of tags)
  // your 'data' key value has to be a function which
  // returns an object of data key-value pairs
  data: function(){
    return {
      message: 'Dogs Form message',
      name: '',
      age: null,
      counter: 1
    };
  },
  template: `
  <div>
    <h3>{{ message }}</h3>
    Name: <input type="text" v-model="name"><br>
    Age: <input type="text" v-model="age"><br>
  </div>
  `
});

const myApp = new Vue({
  // Which part of the HTML page is Vue in charge of:
  el: '#app',
  // What is the data (state) for this app:
  data: {
    message: 'Hello Vuorld!',
    todo: [ 'item1', 'item2' ],
    dogs: []
  },
  created: function(){
    console.log('created()', this);
    $.getJSON('http://localhost:3000/dogs')
    .done( response => {
      this.dogs = response;
    })
    .fail( console.warn );
  }
});
