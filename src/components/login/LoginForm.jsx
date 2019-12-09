import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Form, Alert, Button} from 'react-bootstrap';
import './Login.css'
import '../../index.css'


const LoginForm = ({
    nom,
    code,
    errorMessage,
    onInputChange
    //authentificate,
    
}) => {
    return (
        <Row>
            <Col>
                <Form /*onSubmit = {authenticate}*/>
                    <Form.Group controlId = "formHorizontalNom">
                        <Form.Label className = "Dyslexic">Nom : </Form.Label>
                        <Form.Control
                            className = "textInput Dyslexic"
                            name = "name"
                            type = "nom"
                            placeholder = "nom"
                            value = {nom}
                            onChange = {onInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId = "fromHorizontalCode">
                        <Form.Label className = "Dyslexic">Code : </Form.Label>
                        <Form.Control 
                            className = "textInput Dyslexic"
                            name = "code"
                            type = "code"
                            placeholder = "code"
                            value = {code}
                            onChange = {onInputChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button className = "Dyslexic buttonText" type="submit" /*onSubmit = {authenticate} */ >Connexion</Button>
                    </Form.Group>
                </Form>
                {errorMessage && <Alert variant = "danger">Test ErrorMessage {/*errorMessage*/}</Alert>}
            </Col>
        </Row>
    )
}

export default LoginForm;