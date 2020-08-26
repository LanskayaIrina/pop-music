import { CHECKED_USER } from './actionTypes';

const initiallState = {
  user: {},
};

export const checkedUserReducer = (state = initiallState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECKED_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
