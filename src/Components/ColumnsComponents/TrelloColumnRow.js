import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Form} from 'react-bootstrap';
import {useState } from 'react'
//import { LinkContainer } from "react-router-bootstrap";



const TrelloColumnRow = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let newName = '';
    const handleChange = (event) => {
        const value = event.target.value;
        newName = value;
    }

    const styles = {
        backgroundColor: "gray",
        borderRadius: 3,
        width: "25em",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        flexBasis: "300px",
        flexGrow: 0,
        flexShrink: 0
    }

    return (
        <React.Fragment>
            <div className="md-5" style={styles}>
                <Button>{props.column.title}</Button>
                <Button onClick = {() => props.onDelete(props.column.id)}>Delete</Button>
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
                    <Button variant="primary" onClick={() => {props.onUpdate(props.column.id, newName); handleClose();}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </React.Fragment>
    );
}

export default TrelloColumnRow;
