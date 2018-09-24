
let app = new Vue({

  // This tells Vue which is the root element of the application,
  // i.e. the part of the page Vue is responsible for, and controls the rendering of
  el: '#app',

  data: {
    // The core data of your specific app goes here
    // i.e. bank account balances, etc

    message: 'Hello World!',
    titleMessage: `You loaded this page on ${new Date().toLocaleString()}`,

    isVisible: true,

    listItems: [
      { text: 'First item' },
      { text: 'Second item' },
      { text: 'Third item' },
    ],

    inputValue: 'this will go in the input',

  },

  methods: {
    // These are methods you can use in your Vue-based HTML

    getDate: function(){
      return `You loaded this page on ${new Date().toLocaleString()}`;
    },

    reverseMessage: function(){
      // Note that when referring to properties of your 'data' object from inside methods, you don't
      // actually use the 'data' key - all the properties of your data are available directly inside 'this'
      this.message = this.message.split('').reverse().join('');
    },

  }

});
