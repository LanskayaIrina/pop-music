import { GET_VIDEOS, GET_VIDEO_ID, FIND_VIDEO, SET_CURRENT_PAGE } from './actionTypes';

const initialState = {
  videos: [],
  isPlayingVideoId: '',
  filterVideoStr: '',
  pageSize: 9,
  totalPagesCount: 46,
  currentPage: 1,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};
