import React from "react";
import Home from "./scenes/Home";
import NotFound from "./scenes/NotFound";
import SetupNeeds from "./scenes/SetupNeeds";
import GetId from "./scenes/GetId";
import SetupDevice from "./scenes/SetupDevice";
import UpdateWifi from "./scenes/UpdateWifi";
import { Switch, Route } from "react-router-dom";

export class SceneRoutes extends React.Component {
  render() {
    return (
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
    );
  }
}
