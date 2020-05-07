import React, { Component } from 'react';
import styled from "styled-components";
import './style.css'
const Label= styled.label`
    color: salmon;
`;
const Input = styled.input`
background: ${props => props.type=== 'text' ? "white" :  "palevioletred"};
`;

class Point extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {value, name, type, labelText, handle}=this.props;

        return (
            <div>
                <Label htmlFor={name}> {labelText} </Label>
                <Input type={type} required name={name} value={value} id={name} onChange={(e) => handle(e.target.value, name)} />
            </div>
        );
    }
}


export default Point;

