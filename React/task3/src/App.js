import React, {Component} from 'react';
import Profile from './profile';
import './style.css';

const profile1 = {
  email: 'some@email.com',
  name: ['Michael', 'Karleone'],
  address: {
      index: 'C21 B43',
      nummer: '2B',
      street: 'Bramble',
      city: 'Coventry',
      country: 'UK'
  },
  card: {
      title: 'Bircard',
      description: "CashBack",
      number: 1654646145686458,
      term: 5,
      type: 'Credit'
  }
}

const profile2 = {
  email: undefined,
  name: ['Michael', 'Karleone'],
  address: {
      index: 'C21 B43',
      nummer: '2B',
      street: 'Bramble',
      city: 'Coventry',
      country: 'UK'
  },
  card: {
      title: 'Bircard',
      description: "CashBack",
      number: 1654646145686458,
      term: 5,
      type: 'Credit'
  }
}

class App extends Component {
  render() {
    return (
      <div >
        <Profile profile={profile1}/>
        <Profile profile={profile2}/>
        
      </div>
    );
  }
}
export default App;
