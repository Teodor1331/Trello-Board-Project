import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import {useState } from 'react'
import { LinkContainer } from "react-router-bootstrap";



const TrelloBoardTableRow = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let newName = '';
    const handleChange = (event) => {
        const value = event.target.value;
        newName = value;
    }

    return (
        <React.Fragment>
            <div className="container" styles="display:flex;displayOrientation:row">
                <LinkContainer to={`/boards/${props.board.title}`}>
                    <Button>{props.board.title}</Button>
                </LinkContainer>
                <Button onClick = {() => props.onDelete(props.board.id)}>Delete</Button>
                <Button variant="primary" onClick={handleShow}>
                    Update
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Board</Modal.Title>
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
                    <Button variant="primary" onClick={() => {props.onUpdate(props.board.id, newName); handleClose();}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </React.Fragment>
    );
}

export default TrelloBoardTableRow;
