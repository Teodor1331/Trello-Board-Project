import { Component } from "react"
// import { Link, Outlet } from "react-router-dom";


class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                    <a href="/register">
                        <p>Register</p>
                    </a>
                    <a href="/">
                        <p>Home</p>
                    </a>
            </nav>
        );
    }
}
 
export default NavBar;