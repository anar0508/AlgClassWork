import React, { Component } from 'react';
import PropType, { number } from 'prop-types';
import './style.css';

class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        if (this.state.count + 1 > 20) {
            this.setState({
                count: 20
            })
        }
        else {
            this.setState({
                count: this.state.count + 1
            })
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    decrement = () => {
        if (this.state.count - 1 < 0) {
            this.setState({
                count: 0
            })
        }
        else {
            this.setState({
                count: this.state.count - 1
            })
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }
    }

    render() {
        return (
            <div className='counter'>
                <button onClick={() => {
                    this.decrement()
                }}> - </button>
                <p> {this.state.count} </p>
                <button onClick={() => {
                    this.increment()
                }}> + </button>
            </div>
        )
    }
}


export default Counter;