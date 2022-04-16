import { Component } from "react"
import { dataBase } from '../Database'; 
// import { Link, Outlet } from "react-router-dom";


class NavBar extends Component {
    // constructor() {
    //     super();
    //     this.getUser.bind(this);
    // }

    getUser = async() => {
        return await dataBase.users.where({isLogged: 1}).toArray();
    }

    render() { 
        this.getUser().then(result => {console.log(result[0].username)});
        return (
            <div>
                <nav>
                    <a href="/register">
                        <p>Register</p>
                    </a>
                    <a href="/">
                        <p>Home</p>
                    </a>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;