import React, { Component } from 'react';
import './style.css'

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayEmail: '',
            displayPassword:''
        }
    }

    showTipEmail = () => {
        this.setState(
            { displayEmail: 'active' }
        )
    }

    removeTipEmail = () => {
        this.setState(
            { displayEmail: '' }
        )
    }

    showTipPassword = () => {
        this.setState(
            { displayPassword: 'active' }
        )
    }

    removeTipPassword = () => {
        this.setState(
            { displayPassword: '' }
        )
    }

    render() {
        const { displayEmail, displayPassword } = this.state;
        return (
            <div>
                <div className='input-container'>
                    <label htmlFor="email" >Ваш e-mail</label>
                    <input onFocus={this.showTipEmail} onBlur={this.removeTipEmail} type="email" name="email" id="email" />
                    <p className={'tip ' + displayEmail}> Only ".az" domens are available </p>
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Ваш пароль</label>
                    <input onFocus={this.showTipPassword} onBlur={this.removeTipPassword} type="password" name="password" id='password' minLength={8} />
                    <p className={'tip ' + displayPassword}> Minimum 8 symbols </p>
                </div>
                <button>Login</button>
            </div>
        );
    }
}

export default UserLogin;