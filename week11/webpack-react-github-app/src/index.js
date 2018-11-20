import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// import Hello from './components/Hello.jsx';

import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import GitHubProfile from './components/GitHubProfile.jsx';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/details/:username" component={ GitHubProfile } />
    </div>
  </Router>
);

ReactDom.render(Routes, document.getElementById('app'));
