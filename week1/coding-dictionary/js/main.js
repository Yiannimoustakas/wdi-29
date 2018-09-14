
const dict = {
  definitions: {
    'method':   'a function which is defined inside and object',
    'scope':    'the visibility or lifetime of a variable within a program',
    'variadic': 'a variadic function accepts a variable number of arguments',
  },

  printAllDefinitions: function(){

    let totalDefinitions = 0;
    for( let key in this.definitions ){
      console.log(`${key}: ${ this.definitions[key] }`);
      totalDefinitions++;
    }
    console.log(`Total entries: ${totalDefinitions}`);
  },

  lookupWord: function( word ){

    if( word in this.definitions ){
      // return a string including the word and its definition
      // return `${word}: ${ this.definitions[word] }`;
      return {
        word: word,
        definition: this.definitions[word]
      };
    } else {
      // Not found
      return `No entry for ${word}, sorry.`;
    }

  },

  addDefinition: function( word, definition ){
    if( word in this.definitions ){
      // Definition already exists; show it to the user
      return `${word} is already defined as: ${ this.definitions[word] }`;
    } else {
      // Add the new definition
      this.definitions[word] = definition;  // set the new key and its value
      return `Added ${word}: ${definition}`;
    }
  },

  removeDefinition: function( word ){
    if ( word in this.definitions ) {
      delete this.definitions[word];
      return `Deleted entry for ${word}. Current entries: ${ this.getTerms().join(', ') }`;
    } else {
      return `No entry for ${word}.`
    }
  },

  getTerms: function(){
    // let terms = [];
    // for( let key in this.definitions ){
    //   terms.push( key );
    // }
    // return terms;
    return Object.keys( this.definitions );
  },

};
