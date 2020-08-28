import { ADD_FAVORITE_VIDEO, TOGGLE_FAVORITE_VIDEOS, ADD_FAVORITE_VIDEO_ID } from './actionTypes';

export const addIdVideoToFavorite = id => dispatch => {
  dispatch({ type: ADD_FAVORITE_VIDEO_ID, payload: id });
};

export const toggleFavorites = event => dispatch => {
  dispatch({ type: TOGGLE_FAVORITE_VIDEOS, payload: event });
};

export const addFavoriteVideo = favoriteVideo => dispatch => {
  dispatch({ type: ADD_FAVORITE_VIDEO, payload: favoriteVideo });
};
