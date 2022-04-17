import React from "react";

const TrelloBoardTableRow = (props) => {
    console.log(props.board)

    return (
        <React.Fragment>
            <tr>{props.board.title}</tr>
        </React.Fragment>
    );
}

export default TrelloBoardTableRow;
