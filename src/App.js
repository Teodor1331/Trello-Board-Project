import React, { Component } from "react";
import TrelloColumn from "./Components/TrelloColumn";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrelloColumn title="test"/>
      </div>
    );
  }
}

export default App;
