import React, { Component } from 'react';
import Modal from './modal';
import './style.css';

let infoBlock1 = {
  content: <p className="modal-content"> Backend developer</p>
}

let infoBlock2 = {
  content: <p className="modal-content"> Frontend developer</p>
}

let infoBlock3 = {
  content: <p className="modal-content"> Fullstack developer</p>
}

class App extends Component {



  render() {
    return (
      <div className="App">
        <Modal info={infoBlock1} />
        <Modal info={infoBlock2} />
        <Modal info={infoBlock3} />

      </div>
    );
  }
}

export default App;
