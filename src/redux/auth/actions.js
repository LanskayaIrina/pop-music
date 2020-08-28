import { AUTH_USER, LOG_OUT } from './actionTypes';

export const authUser = isAuthorized => {
  return isAuthorized
    ? {
        type: AUTH_USER,
        payload: { isAuthorized },
      }
    : { type: LOG_OUT, payload: { isAuthorized } };
};
