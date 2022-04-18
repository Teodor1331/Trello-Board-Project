import React from "react";

import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import TrelloBoardTable from "../Components/BoardsComponents/TrelloBoardTable"
import {useState } from 'react'
import authenticationContext from "../Authentication";
import { useContext } from "react";


const BoardsPage = () => {
    // const boards = useLiveQuery(() => dataBase.boards.toArray());
    const authentication = useContext(authenticationContext);

    const [state, setState] = useState([
        {id : 1, title : "Board1",  user_id : 0},
        {id : 2, title : "Board2",  user_id : 0},
        {id : 3, title : "Board3",  user_id : 0},
        {id : 4, title : "Board4",  user_id : 0}    
    ])
    const [counter, setCounter] = useState(4)

    const deleteBoard = (boardId) => {
        const state2 = state.filter(x => x.id !== boardId)
        setState(state2)
        console.log(state)
    }

    const updateBoard = (boardId, newName) => {
        const state2 = state.filter(x => x.id !== boardId)
        const state3 = state.filter(x => x.id === boardId)
        state3[0].title = newName;
        state2.push(state3[0]);
        setState(state2)
        console.log(state)
    }

    const addBoard = () => {
        const state2 = state
        const id = counter + 1
        const title = "Board" + id
        const user_id = authentication.user.id
        state2.push({id : id, title : title, user_id : user_id})
        setState(state2)
        setCounter(id)
    }  
    console.log(state)

    return (
        <React.Fragment>
            <Container className = {'my-5'} >
                <Row>
                    <Col md = {6}>
                        <h1>Boards</h1>
                    </Col>
                    <Col md = {6}>
                        <div className = {'d-flex justify-content-end'}>
                            <button onClick={addBoard}>Create New Board</button>
                        </div>
                    </Col>
                </Row>
                { <div>
                    {<TrelloBoardTable boards={state} onDelete={deleteBoard} onUpdate={updateBoard}/>}
                </div> }
            </Container>
        </React.Fragment>
    )
}

export default BoardsPage;