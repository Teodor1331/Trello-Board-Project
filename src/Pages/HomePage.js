import React from "react";

const HomePage = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    let usernames = [];
    users.forEach(user => usernames.push(user.username));

    return (
        <React.Fragment>
            <div className = {'my-5'}>
                <h1 className = {'mb-5'}>Home</h1>
                <h2 className = {'mb-5'}>Users:</h2>
                <ol>
                {usernames?.map(username => <li key = {username.id}>{username}</li>)}
                </ol>
            </div>
        </React.Fragment>
    )
}

export default HomePage;