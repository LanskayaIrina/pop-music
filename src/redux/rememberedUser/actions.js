import { REMEMBER_USER } from './actionTypes';

export const rememberUser = user => dispatch => {
  console.log('userRemember', user)
  dispatch({
    type: REMEMBER_USER,
    payload: { ...user },
  });
};
