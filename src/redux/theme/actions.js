import { CHANGE_THEME } from './actionTypes';

export const changeTeme = theme => dispatch => {
  dispatch({
    type: CHANGE_THEME,
    payload: theme,
  });
};
