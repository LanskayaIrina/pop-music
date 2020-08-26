import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './logIn';
import FormRegister from '../components/formRegister';
import PrivateRoutes from './privateRoutes';

export const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/register" component={FormRegister} />
      <PrivateRoutes />
    </Switch>
  );
};
