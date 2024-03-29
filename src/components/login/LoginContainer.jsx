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

    const [isAuthenticated, setAuthentification ] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let way;

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
            console.log(user)
            const response = await fetch ('/user/connection', {
                method : 'POST',
                body : JSON.stringify(user),
                mode : 'no-cors',
                headers : {
                    'Content-Type': 'application/json',
                    'Content-Encoding' : 'text/plain',
                    'Accept': 'application/json, text/plain, */*',
                }
            }).then(result => {
                console.log(result.status)
                if(result.status === 200){ //enfant
                    console.log('enfant')
                    setAuthentification("enfant");
                }else if(result.status === 201){ //pro
                    console.log('pro')
                    setAuthentification("pro");
                }else if(result.status === 202){ //contact
                    console.log('contact')
                    setAuthentification("contact");
                }
            })
            
        }
        catch (err){
            console.error("LoginContainer::Error", err);
            setAuthentification("");
            setErrorMessage(err.toString());
        }
    };

        //render
        if(isAuthenticated===""){
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
                    </div>
                </div>
            );
        }else if(isAuthenticated==="enfant"){
            return (
                <Redirect to={`jeu/${code}`}></Redirect>
            );
        }
        else if(isAuthenticated==="pro"){
            return (
                <Redirect to={`animateur/${code}`}></Redirect>
            );
        }
        else if(isAuthenticated==="contact"){
            return (
                <Redirect to={`livret/${code}`}></Redirect>
            );
        }else{
            return (
                <Redirect to={`/`}></Redirect>
            );
        }
    }

    export default LoginContainer;