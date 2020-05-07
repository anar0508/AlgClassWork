import React, { Component } from 'react';
import Department from './department';
import './counter.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    }
}

  getData = async () => {
    let fetchResult = await fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood").then(result => result.json())
    this.setState({
      list: fetchResult
    });
  }
  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <div>
        <Department list={this.state.list}/>
      </div>
    );
  }
}

export
  default App; 