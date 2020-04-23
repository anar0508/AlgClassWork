import React, { Component } from 'react';
import PropType from 'prop-types';
import './style.css';

class Email extends Component {
    static defaultProps = {
        email: 'e-mail is not provided'
    }
    static propType = {
        email: PropType.string.isRequired
    }
    render() {
        return (
            <div>
                <p>E-mail: {this.props.email}</p>
            </div>
        );
    }
}
export default Email