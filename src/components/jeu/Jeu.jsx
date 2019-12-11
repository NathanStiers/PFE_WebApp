import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Popup from "reactjs-popup";

let imagesPath = process.env.PUBLIC_URL + "/imagesJeu";

class Jeu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        categories : [],
        images : [],
        etape : 'J\'aime / Je n\'aime pas'
      };
    }
    componentDidMount() {
      fetch("/categories", {
        method: 'GET',
        mode: 'no-cors',
        headers:{
          'Accept':'application/json',
        }
      }).then(result => result.json()).then(result => {
        this.setState({
          categories : result,
          images : this.state.images,
          etape : this.state.etape
        });
        },(error) => {
          console.log(error);
        }
      )
      fetch("/images", {
        method: 'GET',
        mode: 'no-cors',
        headers:{
          'Accept':'application/json',
        }
      }).then(result => result.json()).then(result => {
        result.map(img => {
          img.image = img.image.replace("/images/","/");
        })
        this.setState({
          categories : this.state.categories,
          images : result,
          etape : this.state.etape
        });
        },(error) => {
          console.log(error);
        }
      )
    }
    render(){
      return <div>
            <div>
              <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 class='Jeu-SousTitre Dyslexic'>Raconte ton histoire</h2>
              <h2 class='Jeu-SousTitre Dyslexic'>{this.state.etape}</h2>
            </div>
            <ListGroup>
            {this.state.categories.map((category) => 
              <ListGroupItem variant="info">
                <Container>
                    <h3 id={category.id} class='Dyslexic'>{category.label}</h3> 
                    <Row>
                      {this.state.images.map((image) => {
                        if(image.category == category.id){
                          return <Col md={2}>
                            <Popup trigger={<Image fluid src={imagesPath + image.image} thumbnail />} modal closeOnDocumentClick>
                              <Container>
                                <Row>
                                    <h3 class='Dyslexic'>{this.state.etape + " : " + image.name}</h3>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image class='smiley' fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  />
                                    </Col>
                                    <Col>
                                        <Image fluid src={imagesPath + image.image} thumbnail />
                                    </Col>
                                    <Col>
                                        <Image class='smiley' fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  />  
                                    </Col>
                                </Row>
                              </Container>
                            </Popup>
                          </Col>
                        }
                      })}
                    </Row>
                </Container>
              </ListGroupItem>
            )}
            </ListGroup>
            <Link to="configuration">Une fois l'icône de configuration cliquée</Link><br/><br/>
            <p>Une fois qu'il a fini une des étapes ==> étape suivante</p>
            <Link to="livret">Une fois qu'il a fini toutes les étapes</Link>
        </div>
    }
}

export default Jeu;