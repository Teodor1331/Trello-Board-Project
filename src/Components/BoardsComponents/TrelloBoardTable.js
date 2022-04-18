import React from "react";
import TrelloBoardTableRow from "./TrelloBoardTableRow";

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
                {props.boards.map(board => <TrelloBoardTableRow key={board.id} board = {board} onDelete={props.onDelete} onUpdate={props.onUpdate} rerender={props.rerender}/>)}
            </div>

        </React.Fragment>
    )
}

export default TrelloBoardTable;
