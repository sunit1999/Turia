import React, { Component } from 'react';

import './App.css';
import Clock from './components/clock';
import TaskBox from './components/task';

class App extends Component {

  render() { 
    return (
      <div className="App">
        <TaskBox />
        <Clock />
      </div>
     );
  }
}
 
export default App;

