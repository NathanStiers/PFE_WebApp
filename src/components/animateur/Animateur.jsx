import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem, ListGroup} from 'react-bootstrap';

const Animateur = () => {
    let mockUser = ["Lise Berit","Arnaud Vannat","Rita Uals","Wilfried Tereu","Vanessa Delvasse"];
    var pair = 'light'
    var impair = 'dark'
    return (
        <div>
            <div>
              <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 class='Jeu-SousTitre Dyslexic'>Animateur</h2>
            </div>
            <ListGroup>
                {mockUser.map((name, index)=>
                    <ListGroupItem variant={index%2?pair:impair}>
                        <Container>
                            <Row>
                                <Col>
                                    <p class='Dyslexic'>{name}</p>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroupItem>
                )}
            </ListGroup>
            <Container>

            </Container>
        </div>
    );
}

export default Animateur;