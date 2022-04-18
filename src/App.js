import React from "react";

import BasePage from "./Pages/BasePage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import BoardsPage from "./Pages/BoardsPage";

import AuthenticationContext from "./Authentication";

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import TrelloBoard from "./Components/BoardsComponents/TrelloBoard"

import './App.css';

const App = () => {
  const [user, setUser] = useState(undefined);

  return (
    <React.Fragment>
      <AuthenticationContext.Provider value = {{user: user, setUser: setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<BasePage />}>
              <Route index element = {<HomePage />} />

              <Route path='/register' element = { <RegisterPage /> } />
              <Route path="/login" element = {<LoginPage />} />

              <Route path = "boards">
                <Route index element = {<BoardsPage />} />
                <Route path = ":id" element = {<TrelloBoard />} />
              </Route>

              <Route path="*" element = {<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthenticationContext.Provider>
    </React.Fragment>  
  )
}

export default App;
