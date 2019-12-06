import React from "react";

import LoginForm from "./LoginForm";
import '../../App.css';
import './Login.css';


const LoginContainer = () => {

    //render
    return (

        <div>
            <div>
                <h1 class='Jeu-Titre Dyslexic'>HandicApp</h1>
                <h2 class='Jeu-SousTitre Dyslexic'>Login</h2>
            </div>

            <div className = "blue-bg">
                <LoginForm
                    nom = "Test" //{nom}
                    code = "code" //{code}
                ></LoginForm>
            </div>
        </div>
    );
    }

    export default LoginContainer;