import React from "react";


import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";

import authenticationContext from "../Authentication";

// import TrelloForm from "../Components/TrelloFormLogin";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authentication = useContext(authenticationContext);

    const loginUser = async (event) => {
        event.preventDefault()

        if (!Object.keys(localStorage).includes(username)) {
            alert('User with this username does not exist!');
            throw new Error('LoginError');
        } else if (localStorage.getItem(username) !== password) {
            alert('You entered wrong password! Try again!');
            throw new Error('LoginError');
        }

        authentication.setUser(username);
        navigate("/");
    }

    return (
        <React.Fragment>
            <div className = {'my-6'}>
                <h1 className={'mb-6'}>User Login</h1>

                <form>
                    <input type = 'text' placeholder = 'Username' value = {username}
                    onChange = {event => setUsername(event.target.value)}></input>
                    <input type = 'password' placeholder = 'Password' value = {password}
                    onChange = {event => setPassword(event.target.value)}></input>
                    <button onClick = {loginUser} type = 'submit' className = 'mb-3'>User Login</button>
                </form>
            </div>
    </React.Fragment>)
}

export default LoginPage;