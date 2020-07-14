import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './logIn';
import { PrivateRoutes } from './privateRoutes/PrivateRoutes';

export const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <PrivateRoutes isAuthorized={true} />
    </Switch>
  );
};
