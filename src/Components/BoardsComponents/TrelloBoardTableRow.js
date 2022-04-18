import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import {useState } from 'react'
import { useNavigate } from "react-router";



const TrelloBoardTableRow = (props) => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let newName = '';
    const handleChange = (event) => {
        const value = event.target.value;
        newName = value;
    }

    const redirectBoard = () => {
        navigate("/board/" + props.board.id);
    }

    return (
        <React.Fragment>
            <div className="container" styles="display:flex;displayOrientation:row">
                <button onClick = {redirectBoard}>{props.board.title}</button>
                <button onClick = {() => props.onDelete(props.board.id)}>Delete</button>
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
                    <Button variant="primary" onClick={() => props.onUpdate(props.board.id, newName)}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </React.Fragment>
    );
}

export default TrelloBoardTableRow;
