import React from 'react';
import { Container } from '@material-ui/core';

import Header from '../header';
import Main from '../main';

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Main />
    </Container>
  );
};
