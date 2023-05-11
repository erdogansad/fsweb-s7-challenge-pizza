import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/pages/Home";
import PizzaForm from "./components/pages/PizzaForm";
import Success from "./components/pages/Success";

const App = () => {
  return (
    <Container fluid>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/pizza"><PizzaForm/></Route>
        <Route path="/order-success"><Success/></Route>
      </Switch>
    </Container>
  );
};
export default App;
