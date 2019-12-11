import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Popup from "reactjs-popup";

let imagesPath = process.env.PUBLIC_URL + "/imagesJeu";
let etapes = ['J\'aime / Je n\'aime pas','J\'ai pas besoin d\'aide / J\'ai besoin d\'aide','Je suis content / Je ne suis pas content'];
let configEtape = true;
let sheetId = 1;


class Jeu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        categories : [],
        images : [],
        etape : etapes[0],
        aime : [],
        besoin : [],
        content : [],
        aimePas : [],
        pasBesoin : [],
        pasContent : []
      };
    }
    smileyClicked = (image,smiley) => {
      let tab0 = [...this.state.aime];
      let tab1 = [...this.state.besoin];
      let tab2 = [...this.state.content];
      let tab3 = [...this.state.aimePas];
      let tab4 = [...this.state.pasBesoin];
      let tab5 = [...this.state.pasContent];
      if(this.state.etape === etapes[0]){
        if(smiley === 'happy'){
          tab0.push(image)
        }else{
          tab3.push(image)
        }
      }
      if(this.state.etape === etapes[1]){
        if(smiley === 'happy'){
          tab1.push(image)
        }else{
          tab4.push(image)
        }
      }
      if(this.state.etape === etapes[2]){
        if(smiley === 'happy'){
          tab2.push(image)
        }else{
          tab5.push(image)
        }
      }
      this.setState({
        aime : tab0,
        besoin : tab1,
        content : tab2,
        aimePas : tab3,
        pasBesoin : tab4,
        pasContent : tab5
      });
    }
    btnSuivant = () => {
      if(this.state.etape === etapes[2]){
        console.log(this.state) 
        //todo fetch update sheet ici
      }else{
        let nvEtape = etapes[0];
        if(configEtape){
          if(this.state.etape === etapes[0]){
            nvEtape = etapes[1];
          }else if(this.state.etape === etapes[1]){
            nvEtape = etapes[2];
          }
        }else{
          if(this.state.etape === etapes[0]){
            nvEtape = etapes[2];
          }else if(this.state.etape === etapes[1]){
            nvEtape = etapes[0];
          }
        }
        this.setState({
          etape : nvEtape
        });
      }
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
          categories : result
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
          images : result
        });
        },(error) => {
          console.log(error);
        }
      )
    }
    render(){
      return <div>
            <div>
              <h1 className='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 id="sousTitre" className='Jeu-SousTitre Dyslexic'>Raconte ton histoire</h2>
              <h2 className='Jeu-SousTitre Dyslexic'>{this.state.etape}</h2>
            </div>
            <ListGroup>
            <ListGroupItem variant="info">
                <Row>
                  <Col md={2}><Button id="btnSuivant" variant="success" onClick={() => this.btnSuivant()}>Etape suivante</Button></Col>
                </Row>
            </ListGroupItem>
            {this.state.categories.map((category) => 
              <ListGroupItem variant="info">
                <Container>
                    <h3 id={category.id} className='Dyslexic'>{category.label}</h3> 
                    <Row>
                      {this.state.images.map((image) => {
                        if(image.category == category.id){
                          return <Col md={2}>
                            <Popup trigger={<Image fluid src={imagesPath + image.image} thumbnail />} modal closeOnDocumentClick>
                              <Container>
                                <Row>
                                    <h3 className='Dyslexic'>{this.state.etape + " : " + image.name}</h3>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image className='smiley' fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  onClick={() => this.smileyClicked(image,'happy')}/>
                                    </Col>
                                    <Col>
                                        <Image fluid src={imagesPath + image.image} thumbnail />
                                    </Col>
                                    <Col>
                                        <Image className='smiley' fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  onClick={() => this.smileyClicked(image,'sad')}/>  
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