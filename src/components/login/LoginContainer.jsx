import React from "react";

import LoginForm from "./LoginForm";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const LoginContainer = () => {

    //render
    return (

        <div>
            <div>
                <h1 class='Jeu-Titre'>HandicApp</h1>
                <h2 class='Jeu-SousTitre'>Login</h2>
            </div>

            <div>
                <LoginForm
                    nom = "Test" //{nom}
                    code = "code" //{code}
                ></LoginForm>
                <Link to="jeu">Une fois connecté si enfant</Link><br/><br/>
                <Link to="animateur">Une fois connecté si animateur</Link><br/><br/>
                <Link to="test">Test de la pile technologique</Link>
            </div>
        </div>
    );
    }

    export default LoginContainer;