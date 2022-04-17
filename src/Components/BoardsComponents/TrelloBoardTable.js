import React from "react";
import { Table } from "react-bootstrap";
import BoardsPage from "../../Pages/BoardsPage";
import TrelloBoardTableRow from "./TrelloBoardTableRow";

const TrelloBoardTable = (props) => {
    
    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>Board Name</tr>
                    <tr>Board Operations</tr>
                </thead>
                <tbody>
                        {props.boards.map(board => <TrelloBoardTableRow key={board.id} board = {board}/>)}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default TrelloBoardTable;
