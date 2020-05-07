import React, { Component } from 'react';
import Dropdown from './dropdown';
import './style.css';

let infoBlock1 = {
  title: <h1> Frontend developer</h1>,
  info: <p> Some guy </p>
}

let infoBlock2 = {
  title: <h1> Backend developer</h1>,
  info: <p> Another guy </p>
}

let infoBlock3 = {
  title: <h1> Fulstack developer</h1>,
  info: <p> Result of love of previous 2 guys </p>
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Dropdown info={infoBlock1} />
        <Dropdown info={infoBlock2} />
        <Dropdown info={infoBlock3} />
        <Dropdown info={infoBlock1} />
        <Dropdown info={infoBlock2} />
        <Dropdown info={infoBlock3} />
        <Dropdown info={infoBlock1} />
        <Dropdown info={infoBlock2} />
        <Dropdown info={infoBlock3} />
        <Dropdown info={infoBlock1} />
        <Dropdown info={infoBlock2} />
        <Dropdown info={infoBlock3} />
      </div>
    );
  }
}

export default App;
