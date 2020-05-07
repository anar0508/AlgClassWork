import React, { Component } from 'react';
import './style.css'
import Point from './point'
import Modal from './modal'
import styled from "styled-components";

const Input = styled.input`
    width: 100px;
    height: 50px;
    margin: 30px;
`;

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            modal: false
        }
    }

    handleChange = (value, name) => {

        this.setState({
            [name]: value
        })
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            modal: true
        });

    }

    handleModal = (value) => {
        if (value) {
            this.setState({
                name: '',
                surname: '', 
                modal: false
            });
        } else {
            this.setState({
                modal: false
            });
        }
    }

    render() {
        const { name, surname, modal } = this.state;


        return (
            <div>
                <form className="input-container" onReset={this.handleReset}>
                    <Point name='name' value={name} type='text' labelText='Введите Ваше имя: ' handle={this.handleChange} />
                    <Point name='surname' value={surname} type='text' labelText='Введите Вашу фамилию: ' handle={this.handleChange} />
                    <Input type="reset" disabled={(name.value === '')} value="Reset" />
                </form>
                {modal && <Modal text={name +' '+ surname} handle={this.handleModal} />}

            </div>
        )
    }
}

export default Feedback;