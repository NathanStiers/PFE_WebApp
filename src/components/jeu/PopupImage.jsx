import React from "react";
import {Image, Container, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './Jeu.css';
import Popup from "reactjs-popup";

let imagesPath = process.env.PUBLIC_URL + '/images';

class PopupImage extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      return <Popup trigger={<Image fluid src={this.props.path} thumbnail />} modal closeOnDocumentClick>
        <Container>
            <Row>
                <h3 class='Dyslexic'>Tu aimes ou pas ?</h3> 
            </Row>
            <Row>
                <Col>
                    <Image class='smiley' fluid src={imagesPath + '/smiley/happy.jpg'} roundedCircle  />
                </Col>
                <Col>
                    <Image fluid src={this.props.path} thumbnail />
                </Col>
                <Col>
                    <Image class='smiley' fluid src={imagesPath + '/smiley/sad.jpg'} roundedCircle  />  
                </Col>
            </Row>
        </Container>
      </Popup>
    }
}

export default PopupImage;