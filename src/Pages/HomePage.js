import React from "react";

import { dataBase } from "../Database"
import { Container } from "react-bootstrap";
import { useLiveQuery } from "dexie-react-hooks";

const HomePage = () => {
    const users = useLiveQuery(() => dataBase.users.toArray());

    return (
        <React.Fragment>
            <Container className = {'my-5'}>
                <h1 className = {'mb-5'}>Home</h1>
                <h2 className = {'mb-5'}>Users:</h2>
                {users?.map(user => <li key={user.id}>{user.username}</li>)}
            </Container>
        </React.Fragment>
    )
}

export default HomePage;