import React from "react";

import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import TrelloBoardTable from "../Components/BoardsComponents/TrelloBoardTable"
import TrelloBoard from "../Components/BoardsComponents/TrelloBoard"
import {useState, useEffect } from 'react'
import { useLiveQuery } from "dexie-react-hooks";
import { dataBase } from "../Database";
import authenticationContext from "../Authentication";
import { useContext } from "react";
import Dexie from "dexie";
import { functionExpression } from "@babel/types";
import useForceUpdate from 'use-force-update';


const BoardsPage = () => {
    // const boards = useLiveQuery(() => dataBase.boards.toArray());
    const authentication = useContext(authenticationContext);

    const [state, setState] = useState([
        {id : 1, title : "Board1",  user_id : 0},
        {id : 2, title : "Board2",  user_id : 0},
        {id : 3, title : "Board3",  user_id : 0},
        {id : 4, title : "Board4",  user_id : 0}    
    ])


    const addBoard = () => {
        const state2 = state
        const id = state2.length + 1
        const title = "Title" + id
        const user_id = authentication.user.id
        state2.push({id : id, title : title, user_id : user_id})
        console.log("After push is: ")
        console.log(state2)
        setState(state2)
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
                    {<TrelloBoardTable boards={state}/>}
                </div> }
            </Container>
        </React.Fragment>
    )
}

export default BoardsPage;