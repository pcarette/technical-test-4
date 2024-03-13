import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./pages/List";
import UserView from "./pages/View";

export default () => {
  return (
    <Switch>
      <Route path="/user/:id" component={UserView} />
      <Route path="/" component={List} />
    </Switch>
  );
};
