import React, { useState, useEffect } from "react";
import Point from './point'
import styled from 'styled-components';

const User = styled.div`
display: flex;
width: 50%;
`; 
const Info1 = styled.label`
width: 30%;
border: 1px solid salmon;
`; 

const App = () => {
  const [login, changeLogin] = useState('');
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [age, changeAge] = useState('');
  const [result, changeResult] = useState(false);
  const [showList, show] = useState(false);
  const [UsersList, getList] = useState([]);
  const [CopyUsersList, getCopy] = useState([]);

  const handleChange = (value, persFunc) => {
    persFunc(value);
  }

  const handleSubmit = (e) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        login: login,
        name: name,
        email: email,
        age: age
      }),
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      },
    }).then(()=>{    
      changeResult(true);
      changeLogin('');
      changeName('');
      changeEmail('');
      changeAge('');
      changeResult(false);
      getData();});
      e.preventDefault();
  }

  const handleList=()=>{
    if (showList) {show(false)}
    else show(true)
  }

  const handleDelete=(id)=>{
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    }).then(()=>{getData();});
    
  }

  const getData=()=>{
    fetch("http://localhost:3000/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
     let userInfoComponent = res.map((user) => {
        return (
          <User key={user.id}>
            <Info1>{user.name}</Info1>
            <Info1>{user.email}</Info1>
            <button onClick = {()=>{handleDelete(user.id)}}>Delete</button>
          </User>
        );
      });
      getList(userInfoComponent);
      getCopy(res);
    });
  }

  useEffect(() => {
    getData();
  }, [UsersList]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Point value={login} name='login' type='text' labelText='Введите Ваш логин: ' persFunc={changeLogin} handle={handleChange} />
        <Point value={name} name='name' type='text' labelText='Введите Ваше имя: ' persFunc={changeName} handle={handleChange} />
        <Point value={email} name='email' type='email' labelText='Введите Ваш e-mail: ' persFunc={changeEmail} handle={handleChange} />
        <Point value={age} name='age' type='number' labelText='Введите Ваш возраст: ' persFunc={changeAge} handle={handleChange} />
        <input type="submit" disabled={(login === '' || name === '' || age === '' || email === '')} value="Submit" />
      </form>
      {result && <p> Успешно отправлено</p>}
      <button onClick = {handleList}>
        Show List
      </button>
      {showList&& UsersList}
    </div>
  );
}

export default App;
