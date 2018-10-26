import React, { Component } from 'react';
import './App.css';

import HistoryEraser from './HistoryEraser';

class App extends Component {
  render() {
    return (
      <div className="coolApp">
        <HistoryEraser />
      </div>
    );
  }
}

export default App;
