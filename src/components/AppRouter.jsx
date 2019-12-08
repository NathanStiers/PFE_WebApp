import React from "react"

import { HashRouter as Router, Route } from "react-router-dom"

import Test from "./test/TestPileTechnoComponent"
import Configuration from "./configuration/ConfigurationContainer"
import Animateur from "./animateur/Animateur"
import LoginContainer from "./login/LoginContainer"
import Jeu from "./jeu/Jeu"


function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={LoginContainer} ></Route>
      <Route path="/jeu" component={Jeu}></Route>
      <Route path="/animateur" component={Animateur}></Route>
      <Route path="/configuration" component={Configuration}></Route>
      <Route path="/test" component={Test}></Route>
    </Router>
  )
}

export default AppRouter
