import React, { Component } from 'react';
import './counter.css';

class MortgageCalc extends Component {

    render() {
        const { value, name, text, handle } = this.props;
        return (
            <div className="input-container">
                <label htmlFor={name}> {text} </label>
                <input type="number" name={name} value={value} id={name} onChange={(e) => handle(Number(e.target.value), name)} />
            </div>
        );
    }
}

export default MortgageCalc;