import React from "react";
import styled from 'styled-components';
const Container = styled.div`
display: flex;
width: 50%;
`; 
const Label = styled.label`
width: 25%;
`; 
const Input = styled.input`

`; 


function Point(props) {
  const { value, name, type, labelText, persFunc, handle } = props;

  return (
    <Container>
      <Label htmlFor={name}> {labelText} </Label>
      <Input
        type={type}
        required
        name={name}
        value={value}
        id={name}
        onChange={(e) => handle(e.target.value, persFunc)}
      />
    </Container>
  );
}

export default Point;
