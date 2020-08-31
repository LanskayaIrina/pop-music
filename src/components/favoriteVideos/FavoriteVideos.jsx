import React, { useState } from 'react';
import { arrayOf, string, object } from 'prop-types';
import { Grid } from '@material-ui/core';

import VideoCard from '../videoCard';
import VideoPlayer from '../videoPlayer';

export const FavoriteVideos = ({ favoriteVideosIds, favoriteVideos, className }) => {
  const [isVideoPlayer, setVideoPlayer] = useState(false);
  return (
    <>
      {isVideoPlayer && <VideoPlayer className={className} />}
      <Grid container className={className} spacing={3} alignContent="center">
        {favoriteVideos.map((card, index) => (
          <Grid key={card.id + index} item xs={4}>
            <VideoCard
              setVideoPlayer={setVideoPlayer}
              title={card.title}
              date={card.date}
              description={card.description}
              img={card.img}
              id={card.id}
              favoriteIconColor={
                favoriteVideosIds.filter(videoID => videoID === card.id).length !== 0 ? 'secondary' : 'default'
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

FavoriteVideos.propTypes = {
  favoriteVideosId: arrayOf(string),
  favoriteVideos: arrayOf(object),
  className: string,
};

FavoriteVideos.defaultPropTypes = {
  favoriteVideosId: [],
  favoriteVideos: [],
};
