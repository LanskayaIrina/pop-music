import { GET_VIDEOS, GET_VIDEO_ID, FIND_VIDEO, SET_CURRENT_PAGE } from './actionTypes';
import { HttpService } from '../../services/HttpService';
import { api_key } from '../../utils/apiKey';

const videosUrl = 'https://www.googleapis.com/youtube/v3/videos';

export const getVideos = () => dispatch => {
  HttpService.get(
    `${videosUrl}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=US&key=${api_key}`,
  )
    .then(videos => {
      console.log('res', videos)
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

export const goToCurrentPage = page => dispatch => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
};
