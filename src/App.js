import React, { Component } from 'react';
import Welcome from './Welcome.js';
import './App.css';

class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "Germán"];
    return (
      <div>
        {names.map(name =>
          <Welcome name={name}/>
        )}        
      </div>
    );
  }
}

export default App;
