import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { func, arrayOf, object } from 'prop-types';

import VideoPlayer from '../videoPlayer';
import VideoCard from '../videoCard';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
}));

export const Main = ({ getVideos, videos }) => {
  const classes = useStyles();

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VideoPlayer className={classes.root} />
      <Grid container className={classes.root} spacing={3} alignContent="center">
        {videos.map(card => (
          <Grid key={card.id} item xs={4}>
            <VideoCard
              title={card.snippet.title}
              date={card.snippet.publishedAt}
              description={card.snippet.description}
              img={card.snippet.thumbnails.medium}
              id={card.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Main.propTypes = {
  getVideos: func.isRequired,
  videos: arrayOf(object).isRequired,
};
