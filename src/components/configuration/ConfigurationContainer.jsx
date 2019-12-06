import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem} from 'react-bootstrap';
import ConfigurationForm from "./ConfigurationForm"
import '../../App.css'

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
        </div>
    );
}

export default Configuration;