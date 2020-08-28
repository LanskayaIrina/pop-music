import { AUTH_USER, LOG_OUT } from './actionTypes';

const initialState = {
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthorized: payload.isAuthorized,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
