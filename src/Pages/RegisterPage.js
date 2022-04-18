import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));
    let usernames = []
    users.forEach(user => usernames.push(user.username));
    console.log(usernames); 

    if (usernames.includes(username)) {
      alert("A user with this username has already been registered!");
      throw new Error('LoginError!');
    }


    users.push({username: username, password: password});
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  }

  return (
    <React.Fragment>
      <div className={'my-6'}>
        <h1 className={'mb-6'}>User Registration</h1>
        <form>
          <input type = "text" placeholder = "Username" value = {username}
            onChange = {event => setUsername(event.target.value)}></input>
          <input type = "password" placeholder = "Password" value = {password}
            onChange = {event => setPassword(event.target.value)}></input>
          <button onClick = {registerUser} type = 'submit' className = "mb-3">Register</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default RegisterPage;    