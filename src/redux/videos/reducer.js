import { GET_VIDEOS, GET_VIDEO_ID, FIND_VIDEO } from './actionTypes';

const initialState = {
  videos: [],
  isPlayingVideoId: '',
  filterVideoStr: '',
};

export const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload)
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
    default:
      return state;
  }
};
