import React, { Component } from 'react';
import PropType from 'prop-types';


class Transaction extends Component {
    static defaultProps = {
        data: { category: 'not defined', venue: 'not defined' }
    }
    static propType = {
        price: PropType.number.isRequired,
        date: PropType.bool,
        data: PropType.object
    }
    render() {
        return (
            <div className="Transaction">
                <p> Price: {this.props.price} </p>
                <p> Date: {this.props.date? this.props.date: new Date().toDateString()} </p>
                <p> Category: {this.props.data.category} </p>
                <p> Venue: {this.props.data.venue} </p>
                <hr/>
            </div>
        );
    }
}

export default Transaction;
