import React from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Route, Link } from "react-router-dom";
import Header from "./components /Header"
import FooterMain from "./components /Footer";
import SignInForm from "./components /SignInForm";
import CreateAccountForm from "./components /CreateAccountForm";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={SignInForm} />
      <Route exact path="/createaccount" component={CreateAccountForm} />
      <FooterMain />  
    </div>
  );
}

