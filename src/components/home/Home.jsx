import React, { useEffect } from 'react';
import { func, string } from 'prop-types';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../header';
import Main from '../main';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  darkTeme: {
    backgroundColor: '#000',
    minHeight: '100vh',
  },
}));

export const Home = ({ getVideos, theme }) => {
  const classes = useStyles();

  useEffect(() => {
    getVideos();

    // eslint-disable-next-line
  }, []);
  return (
    <div className={theme === 'Dark' ? classes.darkTeme : ''}>
      <Container maxWidth="lg">
        <Header />
        <Main className={classes.root} />
      </Container>
    </div>
  );
};

Home.propTypes = {
  getVideos: func.isRequired,
  theme: string.isRequired,
};
