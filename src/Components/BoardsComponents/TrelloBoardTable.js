import React from "react";
import { Table } from "react-bootstrap";
import BoardsPage from "../../Pages/BoardsPage";
import TrelloBoardTableRow from "./TrelloBoardTableRow";
import {Routes} from "react-router"

const TrelloBoardTable = (props) => {
    
    return (
        <React.Fragment>
            {/* <Table>
                <thead>
                    <td>Board Name</td>
                    <td>Board Operations</td>
                </thead>
                <tbody>
                    {props.boards.map(board => <TrelloBoardTableRow key={board.id} board = {board}/>)}                        
                </tbody>
            </Table> */}
            <div className="container" styles="display:flex;flexDirection:column">
                {props.boards.map(board => <TrelloBoardTableRow key={board.id} board = {board} onDelete={props.onDelete}/>)}
            </div>

        </React.Fragment>
    )
}

export default TrelloBoardTable;
