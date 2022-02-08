import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import BankForm from "./BankForm";
import Home from "./Home";
import Login from "./Login";
import Otp from "./Otp";
import Register from "./Register";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bankdetails" component={BankForm} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}
