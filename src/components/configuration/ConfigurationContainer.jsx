import React from "react";
import {InputGroup, FormControl, Row, Col, Container, ListGroupItem,Button} from 'react-bootstrap';
import ConfigurationForm from "./ConfigurationForm"
import './Configuration.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import '../../index.css'
import {useState, useContext} from "react";

class Configuration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          userCode : "",
          goBack : false
        }
      }
      componentDidMount() {
      }
      goBackClicked = () => {
        this.setState({
            goBack : true
        })
      }
      render(){
          if(this.state.goBack === true){
            let code = this.props.match.params.code
            console.log(code)
            return <Redirect to={`jeu/${code}`}></Redirect>
          }else{
            return <div>
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
                <Button className = "Dyslexic buttonText" type = "submit" onClick={() => this.goBackClicked()} >Appliquer</Button>
            </div>
            </div>
          }
        }
}

/*const Configuration = () => {
    const [ backToJeu , setBackToJeu ] = useState("");
    console.log(this.props.params)
    const code = this.props.match.params.code
    const onSubmit = e => {
        e.preventDefault();
        setBackToJeu("goBack");
            //TODO : enregister les paramètres et redirect
         console.log("Click avec gestion");
    }

    if(backToJeu === "goBack"){
        return (
            <Redirect to={`jeu/${code}`}></Redirect>
        );
    }else{
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
                        onSubmit = {onSubmit}
                    />
                </div>
            </div>
        );
    }
}*/

export default Configuration;