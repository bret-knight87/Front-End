import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './components /SignIn';


const Nav = styled.nav`
  border: 1px solid black;
  display: flex;
`;

const Title = styled.h1`
  color: #2A9D8F;
  font-size: 4rem;
  border: solid;
  margin-left: 3%;
  margin-top: 3%;
`;

function App() {
  
  return (
    <div className='App'>
      <Nav>
        <img src='/imgs/trollmain.jpg'/>
      <Title>HN Trolls!</Title>
      </Nav>
      <SignIn />  
    </div>
  );
}

export default App;
