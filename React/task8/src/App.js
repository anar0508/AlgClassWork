import React, { Component } from 'react';
import Menu from './menu';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      isVisible: false
    }
  }

  componentDidMount() {
    window.addEventListener('contextmenu', this.clickHandler);
    window.addEventListener('click', this.removeMenu);
  }

  clickHandler = (e) => {
    e.preventDefault();
    if (this.state.isVisible === true && e.target.className !== 'menu-point') {
      this.setState({
        isVisible: false
      })
    } else if (this.state.isVisible === false ){
      this.setState({
        x: e.x,
        y: e.y,
        isVisible: true
      })
    }
  }

  removeMenu=(e)=>{
    if (this.state.isVisible === true && e.target.className !== 'menu-point') {
      this.setState({
        isVisible: false
      })
    }
  }

  render() {

    const { x, y, isVisible } = this.state;
    return (
      <div className="App">
        <Menu x={x} y={y} isVisible={isVisible} />
      </div>
    );
  }
}

export default App;
