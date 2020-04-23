import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';



export default class Dice extends Component {
    state = {
        count: 1
    }
    componentDidMount() {
        window.addEventListener('keypress', (this.handleKeypress));
    }

    handleKeypress = (e) => {
        if (e.keyCode === 32) {
            this.setState({
                count: Math.floor((Math.random() * 6) + 1)
            });
        }
    }

    componentWillUnount() {
        window.removeEventListener('keypress', (this.handleKeypress));
    }

    render() {

        return (
            <div className='dice'>
                <button onClick={() => {
                    this.setState({
                        count: Math.floor((Math.random() * 6) + 1)
                    })
                }}> Жмякни чувак! </button>
                <p> {this.state.count} </p>
            </div>
        )
    }
}

