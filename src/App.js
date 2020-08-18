import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello.</h1>
        <p> This is a Magnolia Labs private cloud reference application. </p>
        <p> This app built using React JS and deployed in Pivotal Cloud Foundry </p>
      </header>
    </div>
  );
}

export default App;
