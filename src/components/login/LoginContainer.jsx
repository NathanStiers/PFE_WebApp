import React from "react";

import LoginForm from "./LoginForm";

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
            </div>
        </div>
    );
    }

    export default LoginContainer;