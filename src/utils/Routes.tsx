import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainView from '../components/layout/MainView';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainView />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
