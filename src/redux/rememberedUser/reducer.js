import { REMEMBER_USER } from './actionTypes';

const initiallState = {
  user: {},
};

export const rememberedUserReducer = (state = initiallState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REMEMBER_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};