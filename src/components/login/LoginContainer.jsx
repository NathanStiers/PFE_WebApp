import React, {useState, useContext} from "react";

import LoginForm from "./LoginForm";
import '../../App.css';
import './Login.css';


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
            </div>
        </div>
    );
    }

    export default LoginContainer;