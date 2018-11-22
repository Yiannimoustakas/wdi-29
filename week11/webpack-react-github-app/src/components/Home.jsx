import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const usernames = [
  'textchimp',
  'liaa2',
  'reldatid',
  'Yiannimoustakas',
  'Lau01',
  'HannahGreenwell'
];

class Home extends Component {


  handleRandomClick(){
    // console.log('random click!');

    const index = Math.floor( Math.random() * usernames.length );
    const username = usernames[ index ];

    this.props.history.push(`/details/${ username }`);
  }

  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <Link to="/search"> {/* Navigate to a new React app route */}
          <button>Search for a user</button>
        </Link>
        <button onClick={ () => this.handleRandomClick() }>Random user</button>
      </div>
    );
  }

}

export default Home;
