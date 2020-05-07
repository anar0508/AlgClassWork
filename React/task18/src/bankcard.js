import React, { Component } from 'react';
import Point from './point'
import './style.css';

class BankCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: { value: '', name: 'name', type: 'text', labelText: 'Имя' },
            number: { value: '', name: 'number', type: 'number', labelText: 'Номер карточки' },
            date: { value: '', name: 'date', type: 'text', labelText: 'Срок истечения ' },
            cvv: { value: '', name: 'cvv', type: 'number', labelText: 'CVV ' },
            result: false
        }
    }

    handleChange = (value, name) => {
        if (name === 'name') {
            this.setState({
                name: { value: value, name: 'name', type: 'text', labelText: 'Введите Ваше имя' }
            })
        }
        else if (name === 'number') {
            this.setState({
                number: { value: value, name: 'number', type: 'number', labelText: 'Номер карточки' }
            })
        }
        else if (name === 'date') {
            this.setState({
                date: { value: value, name: 'date', type: 'text', labelText: 'Срок истечения ' }
            })
        }
        else if (name === 'cvv') {
            this.setState({
                cvv: { value: value, name: 'cvv', type: 'number', labelText: 'CVV ' }
            })
        }
    }


    render() {
        const { name, number, date, cvv, result } = this.state;

        return (
            <form className="input-container" onSubmit={this.handleSubmit}>
                <div className="card">
                    <img class="chip" alt='chip' src="https://img.icons8.com/plasticine/2x/sim-card-chip.png" />
                    <Point {...number} handle={this.handleChange} />
                    <div className='date-container'>
                        <p class="valid"> Valid thru: </p>
                        <Point {...date} handle={this.handleChange} />
                    </div>
                    <Point {...name} handle={this.handleChange} />
                    <img class="visa" alt='visa' src="https://www.pikpng.com/pngl/b/81-810129_visa-la-perle-visa-card-logo-white-clipart.png" />
                </div>

               { (name.value!=="") && (number.value!=="") && (date.value!=="") && <div className="card">
                    <div className='cvv-container'>
                        <p class="cvv-text"> cvv: </p>
                        <Point {...cvv} handle={this.handleChange} />
                    </div>
                    <img class="visa" alt='visa' src="https://www.pikpng.com/pngl/b/81-810129_visa-la-perle-visa-card-logo-white-clipart.png" />
                </div>}
            </form>

        );
    }
}

export default BankCard;
