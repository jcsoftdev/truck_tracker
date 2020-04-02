import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Truck from './Truck/Pages/Truck'
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/truck" exact> 
          <Truck/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
