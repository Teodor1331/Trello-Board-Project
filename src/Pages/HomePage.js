import React from "react";

import { dataBase } from "../Database"
import { useLiveQuery } from "dexie-react-hooks";

const HomePage = () => {
    const users = useLiveQuery(() => dataBase.users.toArray());

    return (
        <React.Fragment>
            <div className = {'my-5'}>
                <h1 className = {'mb-5'}>Home</h1>
                <h2 className = {'mb-5'}>Users:</h2>
                {users?.map(user => <li key = {user.id}>{user.username}</li>)}
            </div>
        </React.Fragment>
    )
}

export default HomePage;