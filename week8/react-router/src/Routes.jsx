
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';

const Routes = (
  <Router>
    <div>
      {/* Map a URL route to a component, which will be rendered when that URL is requested */}
      <Route exact path="/"         component={ Home }  />
      <Route exact path="/faq"      component={ FAQ }   />
      <Route exact path="/faq/:id"  component={ FAQ }   />
    </div>
  </Router>
);

export default Routes;
