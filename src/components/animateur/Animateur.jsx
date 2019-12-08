import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem, ListGroup} from 'react-bootstrap';

const Animateur = () => {
    let mockUser = ["Lise Berit","Arnaud Vannat","Rita Uals","Wilfried Tereu","Vanessa Delvasse"];
    var pair = 'light'
    var impair = 'dark'
    return (
        <div>
            <div>
              <h1 class='Jeu-Titre'>HandicApp</h1>
              <h2 class='Jeu-SousTitre'>Animateur</h2>
            </div>
            <ListGroup>
                {mockUser.map((name, index)=>
                    <ListGroupItem variant={index%2?pair:impair}>
                        <Container>
                            <Row>
                                <Col>
                                    <p>{name}</p>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroupItem>
                )}
            </ListGroup>
            <Container>

            </Container>
            <p>Une fois qu'il a cliqué sur un enfant ==> livret de l'enfant en question</p>
        </div>
    );
}

export default Animateur;