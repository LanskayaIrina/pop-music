import { TOGGLE_FAVORITES_PRODUCT } from './actionTypes';

const initialState = {
  favorite_Videos: [],
};

export const favoriteVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FAVORITES_PRODUCT: {
      const { favorite_Videos } = state;
      const videoInFavorites = favorite_Videos.find(videoId => videoId === payload);

      if (videoInFavorites !== undefined) {
        return {
          ...state,
          favorite_Videos: favorite_Videos.filter(id => id !== payload),
        };
      }

      return {
        ...state,
        favorite_Videos: [...favorite_Videos, payload],
      };
    }
    default:
      return state;
  }
};
