import React, { useEffect } from 'react';
import { func } from 'prop-types';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../header';
import Main from '../main';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
}));

export const Home = ({ getVideos }) => {
  const classes = useStyles();

  useEffect(() => {
    getVideos();

    // eslint-disable-next-line
  }, []);
  return (
    <Container maxWidth="lg">
      <Header />
      <Main className={classes.root} />
    </Container>
  );
};

Home.propTypes = {
  getVideos: func.isRequired,
};
