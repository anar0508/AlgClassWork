import List from './List';
import { Route } from "react-router-dom";
import Description from './Description';
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
const Container = styled.div`
width: 60%;
margin: 0 auto;
display: flex;
`;

function App() {

  const [list, getList] = useState([]);
  const [show, handleShow] = useState(false);
  const getData=()=>{
    fetch("http://localhost:3000/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      getList(res);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleList=()=>{
    if (!show) {handleShow(true)}
  }

  return (
    <Container>
      <List list={list} show={handleList}/>
      {show&&<Route path="/:id" exact render={({match}) => <Description list={list} match={match} isAuthed={true} />}/>}
    </Container>
  );
}

export default App;
