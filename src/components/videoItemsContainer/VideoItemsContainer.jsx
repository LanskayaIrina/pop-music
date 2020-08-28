import React from 'react';
import { func, arrayOf, object, string, bool } from 'prop-types';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import VideoCard from '../videoCard';
import FavoriteVideos from '../favoriteVideos';

import './styles.scss';

export const VideoItemsContainer = ({
  videos,
  favoriteVideosIds,
  toggleFavorites,
  nextPageToken,
  showMoreVideos,
  className,
}) => {
  const videosLayout = (
    <>
      <Grid container className={className} spacing={3} alignContent="center">
        {videos.map((card, index) => (
          <Grid key={card.id + index} item xs={4}>
            <VideoCard
              title={card.snippet.title}
              date={card.snippet.publishedAt}
              description={card.snippet.description}
              img={card.snippet.thumbnails.medium}
              id={card.id}
              favoriteIconColor={
                favoriteVideosIds.filter(videoID => videoID === card.id).length !== 0 ? 'secondary' : 'default'
              }
            />
          </Grid>
        ))}
      </Grid>
      <Grid className="pagination">
        <Button
          className="btn-pagination"
          type="button"
          variant="contained"
          color="secondary"
          onClick={() => showMoreVideos(nextPageToken)}
        >
          Show more
        </Button>
      </Grid>
    </>
  );
  return <>{!toggleFavorites ? videosLayout : <FavoriteVideos className={className} />}</>;
};

VideoItemsContainer.propTypes = {
  videos: arrayOf(object).isRequired,
  favoriteVideos: arrayOf(string),
  toggleFavorites: bool.isRequired,
  nextPageToken: string,
  showMoreVideos: func.isRequired,
  className: string.isRequired,
};

VideoItemsContainer.defaultPropTypes = {
  favoriteVideos: [],
  nextPageToken: '',
};
