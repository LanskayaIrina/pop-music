import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bool } from 'prop-types';

import Home from '../../components/home';

export const PrivateRoutes = ({ isAuthorized }) => {
  const routes = (
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
  );

  const redirect = <Redirect to="/login" />;

  return isAuthorized ? routes : redirect;
};

PrivateRoutes.propTypes = {
  isAuthorized: bool,
};

PrivateRoutes.defaultProps = {
  isAuthorized: false,
};
