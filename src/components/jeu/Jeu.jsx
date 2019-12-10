import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import PopupImage from "./PopupImage";

let imagesPath = process.env.PUBLIC_URL + '/images';
let finished = false;
let categories = ["Déplacements","Habitation","Loisirs","Nutrition","Relations et communication","Responsabilités","Soins personnels"];
let categoriesPath = ["/deplacements/","/habitation/","/loisirs/","/nutrition/","/relationscom/","/responsabilites/","/soinspersonnels/"];
let items = [
["bus.jpg","marcher.jpg","traverser.jpg","velo.jpg","voiture.jpg"],
["allumerlumiere.jpg","balayer.jpg","machinealaver.jpg","passerdunepiecealautre.jpg","prothese.jpg","rangersonespace.jpg","vaisselledef.jpg"],
["casqueetordi.jpg","ecrire.jpg","lire.jpg","television.jpg"],
["boiretasse.jpg","dresserlatable.jpg","mangeraurestaurant.jpg","mangeraveclesmains.jpg","prepareramanger.jpg","sandwichdef.jpg","serviraliments.jpg"],
["parleradesadultes.jpg","parlerencommunaute.jpg","telephone.jpg"],
["acheter.jpg"],
["brossercheveux.jpg","chaussures.jpg","dormir.jpg","douche.jpg","habitssales.jpg","lavercheveux.jpg","laverlesmains.jpg"
    ,"prendrevetementgarderobe.jpg","sessuyer.jpg","shabillertirette.jpg","shabiller.jpg","sebrosserlesdents.jpg",
    "selever.jpg","semoucher.jpg","secherlescheveux.jpg","toilettes.jpg","urgence.jpg"]]

let deplacements = [];
let habitation = [];
let loisirs = [];
let nutrition = [];
let relationscom = [];
let responsabilite = [];
let soinspersonnels = [];

class Jeu extends React.Component {
    constructor(props){
      super(props);
    }
    /*componentDidMount() {
      fetch("/myapp/images", {
        method: 'GET',
        mode:'cors',
        headers:{
          'Content-Type': 'application/json',
          'Accept':'application/json'
        }
      })
      .then(result => result.json())
      .then(result => {
        result.array.forEach(image => {
          switch (image.categorie) {
            case 1:
              deplacements.push(image);
              break;
            case 2:
              habitation.push(image);
              break;
            case 3:
              loisirs.push(image);
              break;
            case 4:
              nutrition.push(image);
              break;
            case 5:
              relationscom.push(image);
              break;
            case 6:
              responsabilite.push(image);
              break;
            case 7:
              soinspersonnels.push(image);
              break;
            default:
              break;
          }
        });
      });
    }*/
    render(){
      return <div>
            <div>
              <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 class='Jeu-SousTitre Dyslexic'>Raconte ton histoire</h2>
            </div>
            <PopupImage></PopupImage>
            <ListGroup>
            {categories.map((category,index) => 
              <ListGroupItem variant="info">
                <Container>
                    <h3 class='Dyslexic'>{categories[index]}</h3> 
                    <Row>
                      {items[index].map((item,index2) =>
                        <Col key={index + "" + index2} md={2}>
                          <PopupImage path={imagesPath + categoriesPath[index] + items[index][index2]}></PopupImage>
                        </Col>
                      )}
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