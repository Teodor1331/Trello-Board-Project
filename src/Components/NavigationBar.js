import React from "react";

import { dataBase } from '../Database';
import authenticationContext from "../Authentication";

import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";

import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const NavigationBar = () => {
    const navigate = useNavigate();
    const authentication = useContext(authenticationContext);

    const logout = () => {
        authentication.setUser(undefined);
        navigate("/");
    }

    return (   
        <React.Fragment>
            <Navbar id = 'navbar' variant = 'dark' sticky = 'top'>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav" className = 'd-flex'>
                    <LinkContainer to = "/"><button>Home</button></LinkContainer>
                    {authentication.user ?
                        <React.Fragment>
                            <LinkContainer to = "/boards"><button>Boards</button></LinkContainer>
                            <button onClick={logout}>Logout</button>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <LinkContainer to = "register"><button>Register</button></LinkContainer>
                            <LinkContainer to = "login"><button>Login</button></LinkContainer>
                        </React.Fragment>
                    }
                    {authentication.user ?
                        <React.Fragment>
                            
                        </React.Fragment>
                        : <React.Fragment />
                    }
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>  
    )
}
 
export default NavigationBar;