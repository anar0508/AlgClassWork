import React from 'react';
import './counter.css';

function Result(props) {

    const { value, text } = props;
    return (
        <div className="input-container">
            <p> {text} {value} </p>
        </div>
    );
}

export default Result;