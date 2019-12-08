import React, {useState, useContext} from "react";

import LoginForm from "./LoginForm";
import './Login.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const LoginContainer = () => {

    // manage state
    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");

    const { isAuthenticated, setAuthentification } = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // manage event fuction to update the state
    const onInputChange = e => {
        if(e.target.name === "name") {
            setNom(e.target.value);
        }else{
            setCode(e.target.value);
        }
    }

    //render
    return (

        <div>
            <div>
                <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
                <h2 class='Jeu-SousTitre Dyslexic'>Login</h2>
            </div>

            <div className = "blue-bg">
                <LoginForm
                    nom = {nom}
                    code = {code}
                    errorMessage = {errorMessage}
                    //authentificate = {} Méthode répondant à l'évenement
                    onInputChange = {onInputChange}
                ></LoginForm>
                <Link to="jeu">Une fois connecté si enfant</Link><br/><br/>
                <Link to="animateur">Une fois connecté si animateur</Link><br/><br/>
                <Link to="test">Test de la pile technologique</Link>
            </div>
        </div>
    );
    }

    export default LoginContainer;