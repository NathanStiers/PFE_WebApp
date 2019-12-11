import React, {useState, useContext} from "react";

import LoginForm from "./LoginForm";
import './Login.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import '../../index.css'


const LoginContainer = () => {

    // manage state
    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");

    const [isAuthenticated, setAuthentification ] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // manage event fuction to update the state
    const onInputChange = e => {
        if(e.target.name === "name") {
            setNom(e.target.value);
        }else{
            setCode(e.target.value);
        }
    }

    //méthode d'authentification
    const authentificate = async e => {
        e.preventDefault();

        const user = {
            name : nom,
            code : code
        };

        try{
            const response = await fetch ('/user/connection', {
                method : 'POST',
                body : JSON.stringify(user),
                mode : 'no-cors',
                headers : {
                    'Content-Type': 'text/plain;charset=UTF-8',
                    'Content-Encoding' : 'text/plain',
                    'Accept': 'application/json, text/plain, */*',
                }
            }).then(result => result.json())
            console.log(response)
        }
        catch (err){
            console.error("LoginContainer::Error", err);
            setAuthentification(false);
            setErrorMessage(err.toString());
        }
        console.log("click sur boutton connexion");
    };

        //render
        if(!isAuthenticated){
            return (

                <div>
                    <div>
                        <h1 className='Jeu-Titre Dyslexic'>HandicApp</h1>
                        <h2 className='Jeu-SousTitre Dyslexic'>Login</h2>
                    </div>

                    <div className = "blue-bg">
                        <LoginForm
                            nom = {nom}
                            code = {code}
                            errorMessage = {errorMessage}
                            authentificate = {authentificate} //Méthode répondant à l'évenement -> devra faire un fetch et ensuite un Redirect si le fetch retourne 200
                            onInputChange = {onInputChange}
                        ></LoginForm>
                        <Link to="jeu">Une fois connecté si enfant</Link><br/><br/>
                        <Link to="animateur">Une fois connecté si animateur</Link><br/><br/>
                        <Link to="test">Test de la pile technologique</Link>
                    </div>
                </div>
            );
        }else{
            return (

                //TODO redirection selo la personne conecté
                <div>
                     <Redirect to="jeu"></Redirect>
                    <p>TODO Redirection selon le role de la personne</p>
                </div>

            );
        }
    }

    export default LoginContainer;