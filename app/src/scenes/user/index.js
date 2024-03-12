import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./pages/list";
import UserView from "./pages/view";

export default () => {
  return (
    <Switch>
      <Route path="/user/:id" component={UserView} />
      <Route path="/" component={User} />
    </Switch>
  );
};
