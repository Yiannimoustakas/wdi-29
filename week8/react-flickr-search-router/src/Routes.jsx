import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import FullscreenImage from './components/FullscreenImage';

const Routes = (
  <Router>
    <div>
      <Route                             component={ SearchForm } />
      <Route exact path="/search/:query" component={ SearchResults } />
      <Route exact path="/image/:id"     component={ FullscreenImage } />
    </div>
  </Router>
);

export default Routes;
