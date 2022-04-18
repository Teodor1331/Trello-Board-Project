import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import {useState } from 'react'
import TrelloCard from '../CardComponents/TrelloCard.js'

const TrelloColumnRow = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showColumn, setShowColumn] = useState(false);
    const handleColumnClose = () => setShowColumn(false);
    const handleColumnShow = () => setShowColumn(true);
    let newName = '';
    const handleChange = (event) => {
        const value = event.target.value;
        newName = value;
    }

    const [state, setState] = useState(JSON.parse(localStorage.getItem('cards')));
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('cardID')));
    const columnId = props.column.id
    let cards = state.filter(x => x.column_id === columnId)

    let newCardName = ''
    let newCardText = ''

    const newCardNameHandle = (event) => {
        const value = event.target.value;
        newCardName = value
    }

    const newCardTextHandle = (event) => {
        const value = event.target.value;
        newCardText = value
    }

    const addCard = (event) => {

        console.log(newCardName)
        console.log(newCardText)

        const newState = state;
        const newCounter = counter + 1;

        console.log("Column ID: ", columnId)

        newState.push({
            id: newCounter,
            title: newCardName,
            text: newCardText,
            column_id : columnId
        });

        setState(newState);
        setCounter(newCounter);

        console.log(newState)

        localStorage.setItem('cards', JSON.stringify(state));
        localStorage.setItem('cardID', JSON.stringify(counter));
    }

    

    const deleteCard = (cardId) => {
        const newState = state.filter(x => x.id !== cardId)
        setState(newState)
        console.log(state)
    }

    const updateCard = (cardId) => {
        const card = state.filter(x => x.id === cardId)[0]

        const newState = state.filter(x => x.id !== cardId)

        card.title = newCardName
        card.text = newCardText

        newState.push(card);
        setState(newState)
        console.log(state)

    }

    const updateCardPosition = (card) => {
        let newState = state.filter(x => x !== card)
        let newCard = card
        newCard.column_id += 1
        newState.push(newCard)
        setState(newState)
        localStorage.setItem('cards', JSON.stringify(state));
      };

    const styles = {
        backgroundColor: "navy",
        borderRadius: 3,
        width: "25em",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        flexBasis: "300px",
        flexGrow: 0,
            flexShrink: 0
        }

    const columnTitle = {
        color : "white"
    }

    return (
        <React.Fragment>
            <div className="md-5" style={styles}>
                <p style={columnTitle}>{props.column.title}</p>
                <Button variant="success" onClick={handleColumnShow}>Add Card</Button>

                <Modal show={showColumn} onHide = {handleColumnClose} aria-labelledby="contained-modal-title-vcenter"centered>

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Card
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>New card </Form.Label>
                            <input type="text" onChange={newCardNameHandle} />
                            <br/>
                            <Form.Label>Task </Form.Label>
                            <input type="textArea" id="newCardText" onChange={newCardTextHandle}/>
                            <div className = {'d-flex justify-content-end'}>
                            <Button variant="success" onClick={addCard} type="submit">Create New Card</Button>
                        </div>
                        </Form.Group>
                     </Modal.Body>
                     
                    <Modal.Footer>
                        <Button onClick={handleColumnClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Button variant = "danger" onClick = {() => props.onDelete(props.column.id)}>Delete</Button>
                <Button variant="primary" onClick={handleShow}>
                    Update
                </Button>
                <br></br>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update column</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>New name</Form.Label>
                            <input type="text" name="newName" onChange={handleChange}/>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {props.onUpdate(props.column.id, newName); handleClose();}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>


                <div>
                    {cards.map(card => <TrelloCard onMove={updateCardPosition} key={card.id} card={card} onDelete={deleteCard} onUpdate={updateCard} newCardTextHandle={newCardTextHandle} newCardNameHandle={newCardNameHandle}/> )}
                </div> 
            </div>

            

        </React.Fragment>
    );
}

export default TrelloColumnRow;
