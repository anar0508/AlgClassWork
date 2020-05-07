import React, { Component } from 'react';
import './style.css'

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            red: false,
            transparent: false,
            bold: false
        }
    }

    changeClass = (value) => {
        let red = this.addRed(value);
        let transparent = this.addTransparent(value);
        let bold = this.addBold(value);
        this.setState({
            value: value,
            red: red,
            transparent: transparent,
            bold: bold
        })
    }

    addRed = (value) => {
        if (value.length < 3 && value.length > 0) {
            return true;
        } else return false
    }

    addTransparent = (value) => {
        var patt1 = /[0-9]/g;
        var result = value.match(patt1);
        if (result === null) {
            return false;
        }
        else {
            return true
        }
    }

    addBold = (value) => {
        if (value.includes(' ')) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        const { red, transparent, bold } = this.state;
        const classList = ' ' + (red ? ' red' : '') + (transparent ? ' transparent' : '') + (bold ? ' bold' : '');
        return (
            <div>
                <div className='input-container'>
                    <label htmlFor="email" >Ваш e-mail</label>
                    <input type="email" onInput={(e) => this.changeClass(e.target.value)} className={'default-class' + classList} id="email" />
                </div>
                <button>Login</button>
            </div>
        );
    }
}

export default UserLogin;