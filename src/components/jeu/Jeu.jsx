import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

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

class Jeu extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount() {
      fetch("/myapp/myresource")
        .then(res => res.text())
        .then((result) => {
          this.setState({
              msg : "Yeeeees : " + result
          });
          },(error) => {
          this.setState({
              msg : "Noooooo : " + error
          });
          }
      )
    }
    render(){
      return <div>
            <div>
              <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 class='Jeu-SousTitre Dyslexic'>Raconte ton histoire</h2>
            </div>
            <ListGroup>
            {categories.map((category,index) => 
              <ListGroupItem variant="info">
                <Container>
                    <h3 class='Dyslexic'>{categories[index]}</h3> 
                    <Row>
                      {items[index].map((item,index2) =>
                        <Col key={index + "" + index2} md={2}>
                        <Image fluid src={imagesPath + categoriesPath[index] + items[index][index2]} thumbnail />
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