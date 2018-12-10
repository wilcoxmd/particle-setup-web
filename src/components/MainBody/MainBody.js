import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";

const MainBody = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default MainBody;
