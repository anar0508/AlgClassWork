import React, { Component } from 'react';
import Transaction from './Transaction'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Transaction price= {53} date ='2020/04/20' data ={{category: 'payment', venue: '28 Mall'}}/>
      <Transaction price= {45} data ={{category: 'leasing', venue: 'PashaBank'}}/>
      <Transaction price= {55} />
      </div>
    );
  }
}

export default App;
