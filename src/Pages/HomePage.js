import React from "react";

const HomePage = () => {
    const users = Object.keys(localStorage)

    return (
        <React.Fragment>
            <div className = {'my-5'}>
                <h1 className = {'mb-5'}>Home</h1>
                <h2 className = {'mb-5'}>Users:</h2>
                <ol>
                {users?.map(user => <li key = {user.id}>{user}</li>)}
                </ol>
            </div>
        </React.Fragment>
    )
}

export default HomePage;