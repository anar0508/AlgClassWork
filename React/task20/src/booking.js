import React, { Component } from 'react';
import './style.css'
import Point from './point'
import Modal from './modal'


class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ['Италия', 'Франция', 'Германия', 'Испания'],
            country: '',
            cities: [],
            city: '',
            showCities: false,
            showDays: false,
            isActive: false
        }
    }

    handleCountryChange = (country) => {
        (country === 'Италия' && this.setState({ cities: ['Рим', 'Флоренция', 'Неаполь', 'Милан', 'Турин'], country: country, showCities: true }));
        (country === 'Франция' && this.setState({ cities: ['Париж', 'Орлеан', 'Марсель', 'Тулуза'], country: country, showCities: true }));
        (country === 'Германия' && this.setState({ cities: ['Берлин', 'Гамбург', 'Бремен'], country: country, showCities: true }));
        (country === 'Испания' && this.setState({ cities: ['Мадрид', 'Валенсия', 'Севилья', 'Малага'], country: country, showCities: true }));
    }

    handleCityChange = (city) => {
        console.log(city);
        this.setState({ showDays: true })
    }

    handleDaysChange = (e) => {
        if (e.target.value) {
            this.setState({ isActive: true })
        }
        else { this.setState({ isActive: false }) }
    
}

handleSubmit = (e) => {
    this.setState({ isActive: false })
    e.target.preventDefault();
}

render() {
    const { countries, cities, showCities, showDays, isActive, country, city } = this.state;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <Point options={countries} value={country} placeHolderText='Страна' handle={this.handleCountryChange} />
                    {showCities && <Point options={cities} city={city} placeHolderText='Город' handle={this.handleCityChange} />}
                </div>
                {showDays && <div className="container">
                    <label htmlFor="days">Количество дней: </label>
                    <input id='days' onChange={this.handleDaysChange} type="number" />
                </div>}

                <input className="submit" type="submit" disabled={!isActive} value="Отправить заявку" />
            </form>
            {/* {modal && <Modal text={name.value} handle={this.handleModal} />} */}

        </div>
    )
}
}

export default Booking;