import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/pages/Home";
import PizzaForm from "./components/pages/PizzaForm";

const App = () => {
  return (
    <Container fluid>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/pizza"><PizzaForm/></Route>
      </Switch>
    </Container>
  );
};
export default App;
