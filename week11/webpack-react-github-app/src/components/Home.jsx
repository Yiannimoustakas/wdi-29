import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <Link to="/search"> {/* Navigate to a new React app route */}
          <button>Search for a user</button>
        </Link>
        <button>Random user</button>
      </div>
    );
  }

}

export default Home;
