import React, { Component } from 'react';
import axios from 'axios';

class GitHubProfile extends Component {

  // state = {}

  constructor(props){
    super(props);

    this.state = {
      user: {},
      repos: []
    };

  }

  componentDidMount(){

    const username = this.props.match.params.username;

    // get user info
    axios.get(`https://api.github.com/users/${username}?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9`)
    .then( response => {
      console.log( 'user info', response.data );
      this.setState({ user: response.data });

    })
    .catch( console.warn );

    // get user repos (this request is independent of the first request, and will run in parallel)
    axios.get(`https://api.github.com/users/${username}/repos?client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9`)
    .then( response => {
      console.log( 'repos', response.data );
      this.setState({ repos: response.data });
    })
    .catch( console.warn );


  } // componentDidMount()


  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <h2>{ this.props.match.params.username }</h2>

        <UserStats user={ this.state.user }/>

        <UserRepos repos={ this.state.repos } />
        { /* this component will have to .map over an array of repo objects from the API response */ }

      </div>
    );
  }

} // class GitHubProfile

const UserRepos = props => {

  if( !props.repos.length ){
    return <p>Loading...</p>;
  }

  console.log('props.repos is:', props.repos);

  // const liTags = [];
  // for( let i = 0; i < props.repos.length; i++ ){
  //   const r = props.repos[i];
  //   liTags.push( <li>{ r.name }</li> );
  // }

  // const liTags = props.repos.map( r => <li>{ r.name }</li> );

  return (
    <div>
      <h3>User Repos</h3>
      <ul>
        { props.repos.map( r => <li><a href={ r.html_url }>{ r.name }</a></li> ) }
      </ul>
    </div>
  );
};

const UserStats = props => {

  if( props.user.id === undefined ){
    return (<div>Loading...</div>);
  }

  // ES6 object destructuring
  const {name, following, followers, public_repos, public_gists} = props.user;

  return (
    <div className="stats">
      <h3>Stats for { name }</h3>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Repos: { public_repos }</p>
      <p>Gists: { public_gists }</p>
    </div>
  );
};




export default GitHubProfile;
