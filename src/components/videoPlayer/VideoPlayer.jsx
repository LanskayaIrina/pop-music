import React from 'react';
import { Grid } from '@material-ui/core';
import Iframe from 'react-iframe';
import { string } from 'prop-types';

export const VideoPlayer = ({ isPlayingVideoId, className }) => {
  if (isPlayingVideoId === '') {
    isPlayingVideoId = 'g04BtfhICzc';
  }

  const url = `https://www.youtube.com/embed/${isPlayingVideoId}`;

  return (
    <Grid container className={className} justify="center">
      <Grid item xs={12}>
        <div className="video-container">
          <Iframe url={url} width="100%" height="100%" id="myId" className="main-video" position="absolute" />
        </div>
      </Grid>
    </Grid>
  );
};

VideoPlayer.propTypes = {
  isPlayingVideoId: string,
  className: string.isRequired,
};

VideoPlayer.defaultPropTypes = {
  isPlayingVideoId: '',
};
