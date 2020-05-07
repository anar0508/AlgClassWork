import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            history: [{ value: 0, id: 0, toDelete: false, added: 0 }],
            id: 0,
        }
    }

    calc = (x) => {
        const { sum, history, id } = this.state;
        let newSum = sum + x;
        let newId = id + 1;
        let newHistory = [...history, { value: newSum, id: newId, toDelete: false, added: x }];
        this.setState({
            sum: newSum,
            history: newHistory,
            id: newId
        })
        console.log(newSum);
    }

    getHistory() {
        const { history } = this.state;
        let values = history.filter(el => { return el.toDelete === false })
            .map(el => {
                return (
                    <div key={el.id} className='history-point' >
                        <p > {el.value}  </p>
                        <button className="log-button" onClick={() => { this.editHistory(el.id) }}> Удалить</button>
                    </div>
                )
            })
        return values;
    }

    editHistory = (ids) => {
        const { sum, history } = this.state;
        history.find(el => { return el.id === ids }).toDelete = true;
        let x = history.find(el => { return el.id === ids }).added;
        let newSum = sum - x;
        this.setState({
            sum: newSum,
            history: history
        })
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