import React, { Component } from 'react';
import MyBankCard from './bankcard';
import './style.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyBankCard
          name='Анар Исмаилов'
          number={1234567891011131}
          expireDate='08/20'
          bankName='PashaBank'
          type='Credit'
          pin={1234}
          cvv={689} />
      </div>
    );
  }
}

export default App;
