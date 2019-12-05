import React from "react";
import { Row, Col, Form, FormGroup, FormCheck } from "react-bootstrap";

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
                    <Form.Group controlId = "formHorizontalMalvoyant">
                        <Form.Check type = "checkbox" label = "L'enfant est malvoyant." /* OU Mode Malvoyant */ /> 
                    </Form.Group>

                    <Form.Group controlId = "formHorizontalMouvement">
                        <Form.Check type = "checkbox" label = "L'enfant présente des problème de mouvement." /*OU Mode difficulté de mouvement */ />
                    </Form.Group>

                    <Form.Group controlId = "formHorizontalDaltonien">
                        <Form.Check type = "checkbox" label = "L'enfant est daltonien" /* OU Mode Daltonien */ />
                    </Form.Group>

                    <Form.Group controlId = "formHorizontalHelpFirst">
                        <Form.Check type = "checkbox" label = "Je préfère commencer le jeu par besoins d'aide." />
                    </Form.Group>
                </Col>
        </Row>
    )
}

export default ConfigurationForm;