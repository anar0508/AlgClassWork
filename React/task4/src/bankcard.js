import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
class App extends Component {
    static defaultProps = {
        type: 'Credit',
        pin: 1324
    }
    static propType = {
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        expireDate: PropTypes.string.isRequired,
        bankName: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['Debit', 'Credit']).isRequired,
        pin: PropTypes.number.isRequired,
        cvv: PropTypes.number.isRequired
    }

    render() {
        return (
            <section>
                <div className="card">
                    <img class="chip" alt='chip' src="https://img.icons8.com/plasticine/2x/sim-card-chip.png" />
                    <p class="nummer">{this.props.number}</p>
                    <p class="valid"> Valid thru: <span>{this.props.expireDate}</span> </p>
                    <p class="name"> {this.props.name} </p>
                    <img class="visa" alt='visa' src="https://www.pikpng.com/pngl/b/81-810129_visa-la-perle-visa-card-logo-white-clipart.png" />
                </div>

                <div className="card">
                    <p class="nummer">{this.props.bankName}</p>
                    <p class="valid"> <span>cvv: {this.props.cvv}</span> </p>
                    <p class="name"> {this.props.type} </p>
                    <img class="visa" alt='visa' src="https://www.pikpng.com/pngl/b/81-810129_visa-la-perle-visa-card-logo-white-clipart.png" />
                </div>
            </section>
        );
    }
}

export default App;
