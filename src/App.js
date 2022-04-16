import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import TrelloColumn from "./Components/TrelloColumn";
import TrelloForm from "./Components/TrelloFormRegistration";

import HomePage from "./Pages/HomePage";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    )
  }
}

export default App;
