import React, { Component } from 'react';
import './style.css'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    showInfo = () => {
        if (this.state.isVisible === true) {
            this.setState({
                isVisible: false
            })

        } else {
            this.setState({
                isVisible: true
            })
        }
    }
    render() {
        const { title, info } = this.props.info;

        return (
            <div className='dropdown'>
                {title}
                <button onClick={this.showInfo}> Show more </button>
                 {this.state.isVisible && <div className='info-container'>
                    {info}
                </div>}
            </div>);
    }
}

export default Dropdown;