import React from "react";
import authenticationContext from "../../Authentication";
import TrelloColumn from "../ColumnsComponents/TrelloColumn";

import { useState, useContext } from "react";

const TrelloBoard = (props) => {
    let address = (window.location.href).split('/');
    const board = address[address.length - 1];

    const authentication = useContext(authenticationContext);

    const [state, setState] = useState(JSON.parse(localStorage.getItem('columns')));
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('columnID')));

    const deleteColumn = (boardId) => {
        const state2 = state.filter(x => x.id !== boardId)
        setState(state2)
        console.log(state)
    }

    const updateColumn = (boardId, newName) => {
        const state2 = state.filter(x => x.id !== boardId)
        const state3 = state.filter(x => x.id === boardId)
        state3[0].title = newName;
        state2.push(state3[0]);
        setState(state2)
        console.log(state)
    }

    const addColumn = () => {
        console.log(state);
        console.log(counter);

        const newState = state;
        const newCounter = counter + 1;
        const title = "Column" + newCounter;
        const user_id = authentication.username;
        newState.push({
            id: newCounter,
            title: title,
            user_id: user_id
        });
        console.log(authentication.username);
        console.log("newState", newState);
        setState(newState);
        setCounter(newCounter);
        localStorage.setItem('columns', JSON.stringify(state));
        localStorage.setItem('columnID', JSON.stringify(counter));
        console.log(state);
        console.log(counter);
    }

    return (
        <div>
            <h1>{board}</h1>
            <TrelloColumn></TrelloColumn>
        </div>
    )
}

export default TrelloBoard;