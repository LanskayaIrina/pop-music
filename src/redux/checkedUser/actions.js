import { CHECKED_USER } from './actionTypes';
import { HttpService } from '../../services/HttpService';

export const addUser = user => dispatch => {
  HttpService.post('http://localhost:3002/users', user);
};

export const checkUser = (name, password) => dispatch => {
  HttpService.get(`http://localhost:3002/users?name=${name}&password=${password}`).then(res => {
    if (res.length !== 0) {
      dispatch({
        type: CHECKED_USER,
        payload: { ...res },
      });
    }
  });
};
