import React, { Component } from 'react';
import MortgageCalc from './mortgageCalc';
import Result from './result';
import './counter.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: { value: '', name: 'sum', text: 'Сумма ($): ' },
      interest: { value: '', name: 'interest', text: 'Ставка (%): ' },
      term: { value: '', name: 'term', text: 'Срок (годы): ' },
      monthly: { value: '', name: 'monthly', text: 'Ежемесячный платёж ($): ' }
    }
  }

  handleChange = (value, name) => {

    (value === 0 && (value = ''));
    let monthly = this.calculate(value, name)

    if (name === 'sum') {
      this.setState({
        sum: { value: value, name: name, text: 'Сумма ($): ' },
        monthly: { value: monthly, name: 'monthly', text: 'Ежемесячный платёж ($): ' }
      })
    }
    else if (name === 'interest') {
      this.setState({
        interest: { value: value, name: name, text: 'Ставка (%): ' },
        monthly: { value: monthly, name: 'monthly', text: 'Ежемесячный платёж ($): ' }
      })
    }
    else if (name === 'term') {
      this.setState({
        term: { value: value, name: name, text: 'Срок (годы): ' },
        monthly: { value: monthly, name: 'monthly', text: 'Ежемесячный платёж ($): ' }
      })
    }

  }

  calculate = (value, name) => {
    let sum = (name === 'sum' ? value : this.state.sum.value);
    let interest = (name === 'interest' ? value / 100 / 12 : this.state.interest.value / 100 / 12);
    let term = (name === 'term' ? value * 12 : this.state.term.value * 12);
    let interestSum = Math.pow(1 + interest, term)
    let monthly = (sum) * (interest) * interestSum / (interestSum - 1)
    return monthly;
  }

  render() {
    const { sum, interest, term, monthly } = this.state;
    return (
      <div className='container'>
        <MortgageCalc {...sum} handle={this.handleChange} />
        <MortgageCalc {...interest} handle={this.handleChange} />
        <MortgageCalc {...term} handle={this.handleChange} />
        <Result {...monthly} />
      </div>
    );
  }
}

export default App; 