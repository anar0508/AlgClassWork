import React, { Component } from 'react';

import './style.css'



class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { text, handle } = this.props;

        return (
            <section>
                <p>Вы уверены, что хотите стереть текст: {text}?</p>
                <div>
                    <button onClick={()=>{handle(true)}} > ДА </button>
                    <button onClick={()=>{handle(false)}} > НЕТ </button>
                </div>
            </section>
        );
    }
}


export default Modal;

