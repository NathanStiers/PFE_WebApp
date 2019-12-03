import React from "react";

import Title from "../Title/Title";
import LoginForm from "./LoginForm";

const LoginContainer = () => {

    //render
    return (

        <div>
        <Title>Login</Title>

        <LoginForm
            nom = {nom}
            code = {code}
        ></LoginForm>
        </div>
    );
    }