import React, { Component } from 'react';

class MenuPoint extends Component {

    handleStyle = () => {
        return {
            display: (this.props.show ? 'block' : 'none')
        }
    }

    render() {
        return (
            <div style={this.handleStyle()} className='result'>
                {this.props.message}
            </div>);
    }
}

export default MenuPoint;