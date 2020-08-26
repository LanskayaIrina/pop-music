import React, { useEffect } from 'react';

import { func, arrayOf, object, string, number } from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from '../videoPlayer';
import VideoCard from '../videoCard';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
}));

export const Main = ({
  getVideos,
  videos,
  favoriteVideos,
  pageSize,
  totalPagesCount,
  currentPage,
  goToCurrentPage,
}) => {
  const classes = useStyles();

  const pagesCount = Math.ceil(totalPagesCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // const goToPage = page => {
  //   goToPageNumber(page);
  // };

  useEffect(() => {
    getVideos();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VideoPlayer className={classes.root} />
      <Grid container className={classes.root} spacing={3} alignContent="center">
        {videos.map((card, index) => (
          <Grid key={card.id + index} item xs={4}>
            <VideoCard
              title={card.snippet.title}
              date={card.snippet.publishedAt}
              description={card.snippet.description}
              img={card.snippet.thumbnails.medium}
              id={card.id}
              favoriteIconColor={
                favoriteVideos.filter(videoID => videoID === card.id).length !== 0 ? 'secondary' : 'default'
              }
            />
          </Grid>
        ))}
      </Grid>
      <Grid className="pagination">
        {pages.map(page => (
          <span
            className={currentPage === page ? 'pagination-item selected-page' : 'pagination-item'}
            onClick={() => goToCurrentPage(page)}
          >
            {page}
          </span>
        ))}
      </Grid>
    </>
  );
};

Main.propTypes = {
  getVideos: func.isRequired,
  videos: arrayOf(object).isRequired,
  favoriteVideos: arrayOf(string),
  pageSize: number.isRequired,
  totalPagesCount: number.isRequired,
  currentPage: number.isRequired,
  goToCurrentPage: func.isRequired,
};

Main.defaultPropTypes = {
  favoriteVideos: [],
};
