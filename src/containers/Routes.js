import React from "react";
import Home from "./../containers/Home";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}



