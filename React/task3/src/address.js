import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

class Address extends Component {

    static propType = {
        address: PropType.object
    }
    render() {
        const {index, nummer, street, city, country} = this.props.address;
        return (
            <div >
                <p>Adress: {index}, {nummer} {street} street, {city}, {country}</p>
            </div>
        );
    }
}
export default Address;