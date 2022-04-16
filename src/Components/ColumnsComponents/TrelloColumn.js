import React from "react";
import TrelloCard from "../CardComponents/TrelloCard"

const TrelloColumn = ({title}) => {
    return(
        <div style={styles.container}>
        <h4>{title}</h4>
        <TrelloCard />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "gray",
        borderRadius: 3,
        width: 300,
        padding: 8,
    }
}

export default TrelloColumn;