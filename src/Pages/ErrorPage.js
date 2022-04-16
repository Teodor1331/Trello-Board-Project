import React from "react";

import { Container } from "react-bootstrap";

const ErrorPage = () => {
    return (
        <React.Fragment>
            <Container className = 'my-6'>
                <h1>You entered an invalid URL address!</h1>
            </Container>
        </React.Fragment>
    )
}

export default ErrorPage;