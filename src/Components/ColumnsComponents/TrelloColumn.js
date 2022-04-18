import React from "react";
import TrelloColumnRow from "./TrelloColumnRow";


const TrelloColumn = (props) => {
    
    return(
        <div style={styles.container}>
                {props.columns.map(column => <TrelloColumnRow key={column.id} column = {column} onDelete={props.onDelete} onUpdate={props.onUpdate} rerender={props.rerender}/>)}
        </div>
    )
}
            
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
    }
}

export default TrelloColumn;