import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            history: [{ value: 0, id: 0 }],
            id:0
        }
    }

    calc = (x) => {
        const { sum, history, id } = this.state;
        let newSum = sum + x;
        let newId = id + 1;
        let newHistory = [...history, { value: newSum, id: newId }];
        this.setState({
            sum: newSum,
            history: newHistory,
            id: newId
        })
        console.log(newSum);
    }

    getHistory() {
        const { history } = this.state;
        let values = history.map(el => { return <p key={el.id}> {el.value} </p> })
        return values;
    }

    render() {
        const { sum } = this.state;

        return (
            <div className='container'>
                <h1>Текущее значение счётчика: {sum}</h1>
                <div className='counter-buttons'>
                    <button onClick={() => { this.calc(-5) }}>-5</button>
                    <button onClick={() => { this.calc(-2) }}>-2</button>
                    <button onClick={() => { this.calc(-1) }}>-1</button>
                    <button onClick={() => { this.calc(1) }}>+1</button>
                    <button onClick={() => { this.calc(2) }}>+2</button>
                    <button onClick={() => { this.calc(5) }}>+5</button>
                </div>
                <p>История изменения счётчика: </p>
                <div className='history-container'>{this.getHistory()} </div>
                
            </div>
        );
    }
}

export default Counter;