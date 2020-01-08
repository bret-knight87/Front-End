import React from "react";
import "../App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
  font-family: 'Shadows Into Light', cursive;

  @media (max-width: 800px) {
    font-size: calc(5rem - 1rem);
  }

  @media (max-width: 500px) {
    margin: auto;
  }

`;

// const Footer = styled.footer`
//   // border: 1px solid black;
//   display: flex;
//   background-color: #e9c46a;

//   @media (max-width: 800px) {
//     font-size: 55%;
//   }

//   @media (max-width: 500px) {
//     height: 5%;
//     display: flex;
//     align-items: center;
// `;

// const FooterNav = styled.nav`
//   // border: 1px solid black;
//   margin-left: 25%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 15%;

//   @media (max-width: 800px) {
//     margin-left: 35%;
//   }

//   @media (max-width: 500px) {
//     width: 25%;
//     height: 55%;
//     margin-left: 35%;

//   }
// `;

export default function Header() {
  return (
    <HeadContainer>
      <GlobalStyles />
        <img src="/imgs/trollmain.jpg" />
        <Title>SHN Trolls!</Title>
    </HeadContainer>
  );
}

