import React from "react";
// import TrelloColumn from "../TrelloColumn"

const TrelloBoard = (props) => {
    //const boards = useLiveQuery(() => dataBase.boards.toArray());

    // const [boards, setBoards] = useState( [
    //    {id : 1, title : "Board1"},
    //    {id : 2, title : "Board2"},
    //    {id : 3, title : "Board3"},
    //    {id : 4, title : "Board4"}    
    // ]) 
    // const state = {boards: [
    //     {id : 1, title : "Board1"},
    //     {id : 2, title : "Board2"},
    //     {id : 3, title : "Board3"},
    //     {id : 4, title : "Board4"}    
    // ]}
   
    /*const addBoard = () => {
        let state2 = boards
        const id = boards.lenght + 1
        const title = "Title" + id
        state2.push({id: id, title : title});
        setBoards(state2)
    }*/

    // addBoard()
    // addBoard()


    return (
        <div>
            <h1>{props.board.title}</h1>
            {/*<TrelloBoardTable boards = {boards}/>*/}
        </div>
    )
}

export default TrelloBoard;