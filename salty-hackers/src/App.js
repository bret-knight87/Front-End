import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './components /SignIn';

function App() {
  
  return (
    <div className="App">
      <h1>Need salt with that?</h1>
      <SignIn />    
    </div>
  );
}

export default App;
