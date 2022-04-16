import React from "react";

import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import TrelloBoardTable from "../Components/BoardsComponents/TrelloBoardTable"

const BoardsPage = () => {
    return (
        <React.Fragment>
            <Container className = {'my-5'} >
                <Row>
                    <Col md = {6}>
                        <h1>Boards</h1>
                    </Col>
                    <Col md = {6}>
                        <div className = {'d-flex justify-content-end'}>
                            <button>Create New Board</button>
                        </div>
                    </Col>
                </Row>
                <Row><TrelloBoardTable></TrelloBoardTable></Row>
            </Container>
        </React.Fragment>
    )
}

export default BoardsPage;