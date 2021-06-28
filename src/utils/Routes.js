import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Main View</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
