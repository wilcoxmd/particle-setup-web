import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import SetupNeeds from "../SetupNeeds";
import GetId from "../GetId";
import SetupDevice from "../SetupDevice";
import UpdateWifi from "../UpdateWifi";

const MainBody = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/setup-needs" component={SetupNeeds} />
      <Route path="/configwifi-needs" component={SetupNeeds} />
      <Route path="/getid-needs/" component={SetupNeeds} />

      <Route path="/setup" component={SetupDevice} />
      <Route path="/configwifi" component={UpdateWifi} />
      <Route path="/getid" component={GetId} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default MainBody;
