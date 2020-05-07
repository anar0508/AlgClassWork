import React, { Component } from 'react';
import Point from './point'
import './counter.css';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: { value: '',  name: 'name', type: 'text', labelText: 'Введите Ваше имя: ' },
            surname: { value: '',  name: 'surname', type: 'text', labelText: 'Введите Вашу фамилию: ' },
            phone: { value: '',  name: 'phone', type: 'tel', labelText: 'Введите номер телефона: ' },
            email: { value: '',  name: 'email', type: 'email', labelText: 'Введите Ваш e-mail: ' },
            result: false
        }
    }

    handleChange = (value, name) => {
        if (name === 'name') {
            this.setState({
                name: { value: value,  name: 'name', type: 'text', labelText: 'Введите Ваше имя: ' }
            })
        }
        else if (name === 'surname') {
            this.setState({
                surname: { value: value,  name: 'surname', type: 'text', labelText: 'Введите Вашу фамилию: ' }
            })
        }
        else if (name === 'phone') {
            this.setState({
                phone: { value: value,  name: 'phone', type: 'tel', labelText: 'Введите номер телефона: ' }
            })
        }
        else if (name === 'email') {
            this.setState({
                email: { value: value,  name: 'email', type: 'email', labelText: 'Введите Ваш e-mail: ' }
            })
        }
    }

    handleSubmit = (e) => {    
        this.setState({
            result: true
        })
        setTimeout(()=>{this.setState({
            name: { value: '',  name: 'name', type: 'text', labelText: 'Введите Ваше имя: ' },
            surname: { value: '',  name: 'surname', type: 'text', labelText: 'Введите Вашу фамилию: ' },
            phone: { value: '',  name: 'phone', type: 'tel', labelText: 'Введите номер телефона: ' },
            email: { value: '',  name: 'email', type: 'email', labelText: 'Введите Ваш e-mail: ' },
            result: false
        })}, 3000)
        e.preventDefault();
    }

    render() {
        const { name, surname, phone, email, result } = this.state;

        
        return (
            <div>
                <form className="input-container" onSubmit={this.handleSubmit}>
                    <Point {...name} handle={this.handleChange}  /> 
                    <Point {...surname} handle={this.handleChange}  />
                    <Point {...phone} handle={this.handleChange} />
                    <Point {...email} handle={this.handleChange}  />
                    <input type="submit" disabled={(name.value===''|| surname.value===''|| phone.value===''|| email.value==='')} value="Submit" />
                </form>
                {result && <p> Успешно отправлено</p>}

            </div>
        )
    }
}

export default Feedback;