import React from "react";

const LoginForm = ({
    nom,
    code
}) => {
    return (
        <Row>
            <Col>
                <Form onSubmit={authenticate}>
                    <Form.Group controlId = "formHorizontalNom">
                        <From.Label>Nom : </From.Label>
                        <Form.Control
                            name = "nom"
                            type = "nom"
                            placeholder = "nom"
                            value = {nom}
                            onChange = {onInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId = "fromHorizontalCode">
                        <Form.Label>Code : </Form.Label>
                        <Form.Control 
                            name = "code"
                            type = "code"
                            placeholder = "code"
                            value = {code}
                            onChange = {onInputChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button type="submit" onSubmit = {authenticate}>Connexion</Button>
                    </Form.Group>
                </Form>
                {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
            </Col>
        </Row>
    )
}

export default LoginForm;