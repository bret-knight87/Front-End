import React from "react";
import "../App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');
  body {
    font-family: 'Notable', sans-serif;
  }
`;

const HeadContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  background-color: #e9c46a;

  @media (max-width: 800px) {
    height: 20%;

    img {
      width: 25%;
      height: auto;
    }
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
`;

const Title = styled.h1`
  color: #2a9d8f;
  font-size: 5rem;
  // border: solid;
  margin-left: 3%;
  margin-top: 3%;
  font-family: "Shadows Into Light", cursive;

  @media (max-width: 800px) {
    font-size: calc(5rem - 1rem);
  }

  @media (max-width: 500px) {
    margin: auto;
  }
`;

const HeadNav = styled.nav`
  // border: solid 1px;
  display: flex;
  justify-content: space-around;
  margin-left: 40%;
  height: 20%;
  width: 10%;

  @media (max-width: 800px) {
    width: 12%;
    font-size: 30%;
    margin-left: 15%;
    margin-top: 2%;
  }

  @media (max-width: 500px) {
    width: 20%;
    margin-top: 5%;
  }

`;

export default function Header() {
  return (
    <HeadContainer>
      <GlobalStyles />
      <img src="/imgs/trollmain.jpg" alt="The SHN Troll!"/>
      <Title>SHN Trolls!</Title>
      <HeadNav>
        <p>
        <a href="https://shnt3-splash.netlify.com/" className="Foot-nav">Home</a>
        </p>
        <p>|</p>
        <p>
        <Link to="/" className="Foot-nav">Log In</Link>
        </p>
      </HeadNav>
    </HeadContainer>
  );
}
