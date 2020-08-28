import { ADD_FAVORITE_VIDEO, TOGGLE_FAVORITE_VIDEOS, ADD_FAVORITE_VIDEO_ID } from './actionTypes';

const initialState = {
  favoriteVideosIds: [],
  toggleFavorites: false,
  favoriteVideos: [],
};

export const favoriteVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVORITE_VIDEO_ID: {
      const { favoriteVideosIds } = state;
      const videoInFavorites = favoriteVideosIds.find(videoId => videoId === payload);

      if (videoInFavorites !== undefined) {
        return {
          ...state,
          favoriteVideosIds: favoriteVideosIds.filter(id => id !== payload),
        };
      }

      return {
        ...state,
        favoriteVideosIds: [...favoriteVideosIds, payload],
      };
    }
    case TOGGLE_FAVORITE_VIDEOS:
      return {
        ...state,
        toggleFavorites: payload,
      };
    case ADD_FAVORITE_VIDEO:
      {
        const { favoriteVideos } = state;
        const videoInFavorites = favoriteVideos.find(video => video.id === payload.id);

        if (videoInFavorites !== undefined) {
          return {
            ...state,
            favoriteVideos: favoriteVideos.filter(video => video.id !== payload.id),
          };
        }
      }
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, payload],
      };

    default:
      return state;
  }
};
