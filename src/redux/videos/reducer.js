import { GET_VIDEOS, GET_VIDEO_ID, FIND_VIDEO, GET_NEXT_PAGE_TOKEN } from './actionTypes';

const initialState = {
  videos: [],
  isPlayingVideoId: '',
  filterVideoStr: '',
  nextPageToken: '',
};

export const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...payload],
      };
    case GET_VIDEO_ID:
      return {
        ...state,
        isPlayingVideoId: payload,
      };
    case FIND_VIDEO:
      return {
        ...state,
        filterVideoStr: payload,
      };
    case GET_NEXT_PAGE_TOKEN:
      return {
        ...state,
        nextPageToken: payload,
      };
    default:
      return state;
  }
};
