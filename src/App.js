import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import TrelloColumn from "./Components/TrelloColumn";
import TrelloForm from "./Components/TrelloFormRegistration";
import NavBar from "./Components/NavBar";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar/>
        </div>     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/register' element={ <RegisterPage /> }/>
            <Route path="/login" element = {<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
        </React.Fragment>  
    )
  }
}

export default App;
