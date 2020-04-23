import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

class Name extends Component {
    static defaultProps = {
        name: ['John', 'Doe']
    }
    static propType = {
        name: PropType.arrayOf(PropType.string).isRequired
    }
    render() {
        const [name, surname] = this.props.name;
        return (
            <div>
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
            </div>
        );
    }
}
export default Name;