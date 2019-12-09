import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem} from 'react-bootstrap';
import ConfigurationForm from "./ConfigurationForm"
import './Configuration.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import '../../index.css'


const Configuration = () => {

    return (
        <div>
            <div>
              <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
              <h2 class='Jeu-SousTitre Dyslexic'>Configuration</h2>
            </div>
            <div>
                <ConfigurationForm
                    malvoyant = "false" //{malvoyant}
                    mouvement = "false" //{mouvement}
                    daltonien = "false" //{daltonien}
                    helpFirst = "false" //{helpFirst}
                />
            </div>
            <Link to="jeu">Une fois le bouton "Appliquer" cliqué</Link>
        </div>
    );
}

export default Configuration;