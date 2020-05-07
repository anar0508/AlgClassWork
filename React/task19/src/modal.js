import React, { Component } from 'react';
import styled from "styled-components";
import './style.css'
const ModalDiv = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 50%;
    background:#E7E7E7;
    min-width: 600px;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2
`;

const Text = styled.p`
    display: flex;
    text-align: center;
    margin: 40px auto;
    font-size: 40px
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 20px
`;

const Button = styled.button`
    background: #833AE0;
    color: white;
    width: 150px;
    height: 75px;
    border: none;
    font-size: 30px;
    padding: 5px;
`;

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { text, handle } = this.props;

        return (
            <ModalDiv>
                <Text>Вы уверены, что хотите стереть текст: {text}?</Text>
                <Container>
                    <Button onClick={()=>{handle(true)}} > ДА </Button>
                    <Button onClick={()=>{handle(false)}} > НЕТ </Button>
                </Container>
            </ModalDiv>
        );
    }
}


export default Modal;

