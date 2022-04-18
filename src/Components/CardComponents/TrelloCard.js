import React from "react";
import { Card } from "@mui/material"
import { Typography } from "@mui/material/";
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import {useState } from 'react'


const TrelloCard = (props) => {

    const [state, setState] = useState(props)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card>
            <Typography >{props.card.title}</Typography>
            <br/>
            <Typography >{props.card.text}</Typography>
            <br/>
            <br/>
            <Button variant="secondary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide = {handleClose} aria-labelledby="contained-modal-title-vcenter"centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Card
                    </Modal.Title>
                    <Button variant="success"> Add Card </Button>
                </Modal.Header>

                <Modal.Body>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>New card</Form.Label>
                        <input type="text" onChange={props.newCardNameHandle} />
                        <br/>
                        <Form.Label>Task</Form.Label>
                        <input type="textArea" id="newCardText" onChange={props.newCardTextHandle}/>
                        <div className = {'d-flex justify-content-end'}>
                        <Button variant="info" onClick={() => {props.onUpdate(props.card.id); handleClose()}} type="submit">Update Card</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                    </Form.Group>
                </Modal.Body>
                
                {/* <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer> */}
                </Modal>


            <Button variant="danger" onClick={() => {props.onDelete(props.card.id)}}>
                Delete
            </Button>
            <Button variant="success" onClick={() => {props.onMove(props.card)}}>
                Move
            </Button>
            <br/>
        </Card>
    )
}

export default TrelloCard;
