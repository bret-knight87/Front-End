import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./components /SignIn";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');
  body {
    font-family: 'Notable', sans-serif;
  }
`;

const Nav = styled.nav`
  // border: 1px solid black;
  display: flex;
  background-color: #e9c46a;
`;

const Title = styled.h1`
  color: #2a9d8f;
  font-size: 5rem;
  // border: solid;
  margin-left: 3%;
  margin-top: 3%;
  font-family: 'Shadows Into Light', cursive;
`;

const Footer = styled.footer`
  // border: 1px solid black;
  display: flex;
  background-color: #e9c46a;
`;

const FooterNav = styled.nav`
  // border: 1px solid black;
  margin-left: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav>
        <img src="/imgs/trollmain.jpg" />
        <Title>SHN Trolls!</Title>
      </Nav>
      <SignIn />
      <Footer>
        <p className="copy-right">&copy; 2020 SHNT!</p>
        <FooterNav>
          <p>
            <a className="Foot-nav" href="#home">
              Home
            </a>
          </p>
          <p>|</p>
          <p>
            <a className="Foot-nav" href="#about">
              About
            </a>
          </p>
          <p>|</p>
          <p>
            <a className="Foot-nav" href="#contact">
              Contact
            </a>
          </p>
        </FooterNav>
      </Footer>
    </div>
  );
}

export default App;
