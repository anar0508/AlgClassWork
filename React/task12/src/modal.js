import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isDisabled: false
        }
    }

    changeDisplay = () => {
        if (this.state.isModalOpen === true) {
            this.setState({
                isModalOpen: false,
                isDisabled: false
            })

        } else {
            this.setState({
                isModalOpen: true,
                isDisabled: true
            })
        }
    }

    render() {
        const { content } = this.props.info;
        
        return (
            <div>
                <button onClick={this.changeDisplay} disabled={this.state.isDisabled}> Жмякни</button>
                {this.state.isModalOpen && <div className="modal-container ">
                    <p className="modal-close" onClick={this.changeDisplay}>x</p>
                    {content}
                </div>}
            </div>
        )
    }
}

export default Modal;