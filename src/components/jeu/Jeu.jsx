import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import { Route, Link, BrowserRouter as Router, useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Popup from "reactjs-popup";

let imagesPath = process.env.PUBLIC_URL + "/imagesJeu";
let etapes = ['J\'aime / Je n\'aime pas','J\'ai pas besoin d\'aide / J\'ai besoin d\'aide','Je suis content / Je ne suis pas content'];
let configEtape = true;

class Jeu extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        categories : [],
        images : [],
        etape : etapes[0],
        selected : [],
        aime : [],
        besoin : [],
        content : [],
        aimePas : [],
        pasBesoin : [],
        pasContent : [],
        sheetId : 0,
        finDuJeu : false
      };
    }
    smileyClicked = (image,smiley) => {
      let nvSelected = [...this.state.selected];
      if(!nvSelected.includes(image)){
        nvSelected.push(image);
      }
      let nvAime = [...this.state.aime];
      let nvBesoin = [...this.state.besoin];
      let nvContent = [...this.state.content];
      let nvAimePas = [...this.state.aimePas];
      let nvPasBesoin = [...this.state.pasBesoin];
      let nvPasContent = [...this.state.pasContent];
      var idx;
      if(this.state.etape === etapes[0]){
        if(smiley === 'happy'){
          if(nvAimePas.includes(image)){
            for(idx = 0; idx < nvAimePas.length; idx++){ 
              if ( nvAimePas[idx].id === image.id) {
                nvAimePas.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvAime.includes(image)){
            nvAime.push(image)
          }
        }else if(smiley === 'sad'){
          if(nvAime.includes(image)){
            for(idx = 0; idx < nvAime.length; idx++){ 
              if ( nvAime[idx].id === image.id) {
                nvAime.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvAimePas.includes(image)){
            nvAimePas.push(image)
          }
        }
      }
      if(this.state.etape === etapes[1]){
        if(smiley === 'happy'){
          if(nvBesoin.includes(image)){
            for(idx = 0; idx < nvBesoin.length; idx++){ 
              if ( nvBesoin[idx].id === image.id) {
                nvBesoin.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvPasBesoin.includes(image)){
            nvPasBesoin.push(image)
          }
        }else if(smiley === 'sad'){
          if(nvPasBesoin.includes(image)){
            for(idx = 0; idx < nvPasBesoin.length; idx++){ 
              if ( nvPasBesoin[idx].id === image.id) {
                nvPasBesoin.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvBesoin.includes(image)){
            nvBesoin.push(image)
          }
        }
      }
      if(this.state.etape === etapes[2]){
        if(smiley === 'happy'){
          if(nvPasContent.includes(image)){
            for(idx = 0; idx < nvPasContent.length; idx++){ 
              if ( nvPasContent[idx].id === image.id) {
                nvPasContent.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvContent.includes(image)){
            nvContent.push(image)
          }
        }else if(smiley === 'sad'){
          if(nvContent.includes(image)){
            for(idx = 0; idx < nvContent.length; idx++){ 
              if ( nvContent[idx].id === image.id) {
                nvContent.splice(idx, 1); 
                idx--;
              }
            }
          }
          if(!nvPasContent.includes(image)){
            nvPasContent.push(image)
          }
        }
      }
      this.setState({
        selected : [...nvSelected],
        aime : [...nvAime],
        besoin : [...nvBesoin],
        content : [...nvContent],
        aimePas : [...nvAimePas],
        pasBesoin : [...nvPasBesoin],
        pasContent : [...nvPasContent]
      });
    }
    btnSuivant = () => {
      if(this.state.etape === etapes[2]){
        let sheetItems = [];
        this.state.selected.map((image)=>{
          let item = {
            sheetId : this.state.sheetId,
            itemId : 0,
            loveIt : false,
            needHelp : false,
            wannaChange : false,
            favorite : false,
            comment : "",
          }
          item.itemId = image.id;
          if(this.state.aime.includes(image)){
            item.loveIt = true;
          }
          if(this.state.aimePas.includes(image)){
            item.loveIt = false;
          }
          if(this.state.pasBesoin.includes(image)){
            item.needHelp = false;
          }
          if(this.state.besoin.includes(image)){
            item.needHelp = true;
          }
          if(this.state.content.includes(image)){
            item.wannaChange = false;
          }
          if(this.state.pasContent.includes(image)){
            item.wannaChange = true;
          }
          sheetItems.push(item);
        });
        let bodyToFetch = {
          sheetId : this.state.sheetId,
          sheetItems : [...sheetItems]
        }
        fetch("/sheetItem/endGame", {
          method: 'POST',
          mode: 'no-cors',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(bodyToFetch)
        }).then(result => {
          this.setState({
            finDuJeu : true
          });
        })
      }else{
        let nvEtape = etapes[0];
        if(configEtape){
          if(this.state.etape === etapes[0]){
            nvEtape = etapes[1];
            this.state.images.map((img) => {
              if(!this.state.selected.includes(img)){
                document.getElementById("img" + img.id).style.display = "none";
              }
            });
          }else if(this.state.etape === etapes[1]){
            nvEtape = etapes[2];
          }
        }else{
          if(this.state.etape === etapes[0]){
            nvEtape = etapes[2];
          }else if(this.state.etape === etapes[1]){
            nvEtape = etapes[0];
            this.state.images.map((img) => {
              if(!this.state.selected.includes(img)){
                document.getElementById("img" + img.id).style.display = "none";
              }
            });
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
      ).then(
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
      ).then(
        fetch("/sheet/new/"+this.props.match.params.code, {
          method: 'GET',
          mode: 'no-cors',
          headers:{
            'Accept':'application/json',
          }
        }).then(result => result.json()).then(result => {
            this.setState({
              sheetId : result
            });
          },(error) => {
            console.log(error);
          }
        )
      )
    }
    render(){
      if(this.state.finDuJeu){
        const code = this.props.match.params.code
        return <Redirect to={`livret/${code}`}></Redirect>
      }else{
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
                        if(image.category === category.id){
                          return <Col md={2}>
                            <Popup trigger={<Image id={"img" + image.id} fluid src={imagesPath + image.image} thumbnail />} modal closeOnDocumentClick>
                              <Container>
                                <Row>
                                    <h3 className='Dyslexic' id='titrePopup'>{this.state.etape + " : " + image.name}</h3>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="success" onClick={() => this.smileyClicked(image,'happy')}><Image className='smiley' fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle/></Button>
                                    </Col>
                                    <Col>
                                        <Image fluid src={imagesPath + image.image} thumbnail />
                                    </Col>
                                    <Col>
                                        <Button variant="danger" onClick={() => this.smileyClicked(image,'sad')}><Image className='smiley' fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle/></Button>  
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
}

export default Jeu;