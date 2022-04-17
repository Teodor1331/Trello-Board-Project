import React from "react";
import {Routes, Route} from "react-router";

const TrelloBoardTableRow = (props) => {
    return (
        <React.Fragment>
            <div className="container" styles="display:flex;displayOrientation:row">
                <p>{props.board.title}</p>
                <button onClick = {() => props.onDelete(props.board.id)}>Delete</button>
            </div>

        </React.Fragment>
    );
}

export default TrelloBoardTableRow;
