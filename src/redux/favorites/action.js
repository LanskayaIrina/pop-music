import { TOGGLE_FAVORITES_PRODUCT } from './actionTypes';

export const toggleVideoToFavorite = id => dispatch => {
  dispatch({ type: TOGGLE_FAVORITES_PRODUCT, payload: id });
};
