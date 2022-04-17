import React from "react";

import { Container } from "react-bootstrap";

class ErrorPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className = {'my-6'}>
                    <h1>You entered an invalid address!</h1>
                </Container>
            </React.Fragment>
        )
    }
}

export default ErrorPage;