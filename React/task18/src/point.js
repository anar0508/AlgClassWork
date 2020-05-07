import React, { Component } from 'react';
import './style.css';

class Point extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { value, name, type, labelText, handle } = this.props;

        return (
            <div>
                <input type={type} required name={name} className={name} placeholder={labelText} value={value} id={name}
                    onChange={(e) => handle(e.target.value, name)} />
            </div>
        );
    }
}


export default Point;

