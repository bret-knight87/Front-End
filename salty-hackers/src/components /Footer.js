import React from "react";
import "../App.css";
import styled from "styled-components";

const Footer = styled.footer`
  // border: 1px solid black;
  display: flex;
  background-color: #e9c46a;

  @media (max-width: 800px) {
    font-size: 55%;
  }

  @media (max-width: 500px) {
    height: 5%;
    display: flex;
    align-items: center;
`;

const FooterNav = styled.nav`
  // border: 1px solid black;
  margin-left: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;

  @media (max-width: 800px) {
    margin-left: 35%;
  }

  @media (max-width: 500px) {
    width: 25%;
    height: 55%;
    margin-left: 35%;

  }
`;

export default function FooterMain() {
  return (
      <Footer>
        <p className="Copyright">&copy; 2020 SHNT!</p>
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
  );
}

