import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Jeu.css';

let imagesPath = process.env.PUBLIC_URL + '/images';

const Jeu = () => {
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
    return (
        <div>
            <h1 className='Jeu-Titre'>HandicApp</h1>
            <h2 className='Jeu-SousTitre'>Raconte ton histoire</h2>
            <ListGroup>
            {categories.map((category,index) => 
              <ListGroupItem variant="info">
                <Container>
                    <h3>{categories[index]}</h3> 
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
        </div>
    );
}

export default Jeu;