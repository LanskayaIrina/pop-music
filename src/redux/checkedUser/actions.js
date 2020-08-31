import { CHECKED_USER } from './actionTypes';
import { HttpService } from '../../services/HttpService';

export const addUser = user => dispatch => {
  HttpService.post('http://localhost:3002/users', user);
};

export const checkUser = (email, password) => dispatch => {
  HttpService.get(`http://localhost:3002/users?email=${email}&password=${password}`).then(res => {
   // console.log('nnn', res)
    if (res.length !== 0) {
      dispatch({
        type: CHECKED_USER,
        payload: { ...res },
      });
    }
  });
};
