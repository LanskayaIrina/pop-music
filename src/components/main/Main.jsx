import React, { useEffect } from 'react';

import { func } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from '../videoPlayer';
import VideoItemsContainer from '../videoItemsContainer';

import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
}));

export const Main = ({ getVideos }) => {
  const classes = useStyles();

  useEffect(() => {
    getVideos();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VideoPlayer className={classes.root} />
      <VideoItemsContainer className={classes.root} />
    </>
  );
};

Main.propTypes = {
  getVideos: func.isRequired,
};
