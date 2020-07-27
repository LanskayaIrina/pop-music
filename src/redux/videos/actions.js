import { GET_VIDEOS, GET_VIDEO_ID, FIND_VIDEO } from './actionTypes';
import { HttpService } from '../../services/HttpService';
import { api_key } from '../../utils/apiKey';

export const getVideos = () => dispatch => {
  HttpService.get(
    `?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=US&key=${api_key}`,
  )
    .then(videos => {
      return videos.items;
    })
    .then(videos => {
      dispatch({ type: GET_VIDEOS, payload: videos });
    });
};

export const getVideoById = id => dispatch => {
  dispatch({ type: GET_VIDEO_ID, payload: id });
};

export const searchVideo = filterStr => dispatch => {
  dispatch({ type: FIND_VIDEO, payload: filterStr });
};
