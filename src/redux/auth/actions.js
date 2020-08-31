import { AUTH_USER, LOG_OUT } from './actionTypes';
import { CHECKED_USER } from '../checkedUser/actionTypes';

export const authUser = ({ isAuthorized, name }) => dispatch => {
  return isAuthorized
    ? dispatch({
        type: AUTH_USER,
        payload: { isAuthorized, name },
      })
    : (dispatch({ type: LOG_OUT, payload: { isAuthorized } }),
      dispatch({ type: CHECKED_USER, payload: { 0: { name: '' } } }));
};
