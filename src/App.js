import React, { Component } from 'react';
// import CircularSlider from '@fseehawer/react-circular-slider';

import './App.css';
import Clock from './components/clock';
import TaskBox from './components/task';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    }
  }


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

