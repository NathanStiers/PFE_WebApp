import React from "react";
import { Row, Col, Form, FormGroup, FormCheck, Button } from "react-bootstrap";
import './Configuration.css'
import '../../index.css'


const ConfigurationForm = ({
    malvoyant, //bool
    mouvement, //bool
    daltonien, //bool
    helpFirst
}) => {
    //code

    //render
    return (
        <Row>
                <Col>
                    <Form /*onSubmit = {configure} */>
                        <Form.Group controlId = "formHorizontalMalvoyant">
                            <Form.Check className = "Dyslexic checkboxText" type = "checkbox" label = "L'enfant est malvoyant." /* OU Mode Malvoyant */ /> 
                        </Form.Group>

                        <Form.Group controlId = "formHorizontalMouvement">
                            <Form.Check className = "Dyslexic checkboxText" type = "checkbox" label = "L'enfant présente des problème de mouvement." /*OU Mode difficulté de mouvement */ />
                        </Form.Group>

                        <Form.Group controlId = "formHorizontalDaltonien">
                            <Form.Check className = "Dyslexic checkboxText" type = "checkbox" label = "L'enfant est daltonien" /* OU Mode Daltonien */ />
                        </Form.Group>

                        <Form.Group controlId = "formHorizontalHelpFirst">
                            <Form.Check className = "Dyslexic checkboxText" type = "checkbox" label = "Je préfère commencer le jeu par besoins d'aide." />
                        </Form.Group>

                        <Form.Group>
                            <Button className = "Dyslexic buttonText" type = "submit" /*onSubmit = {configure}*/ >Appliquer</Button>
                        </Form.Group>
                    </Form>
                </Col>
        </Row>
    )
}

export default ConfigurationForm;