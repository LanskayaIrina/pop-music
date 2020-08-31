import { CHECKED_USER } from './actionTypes';

const initiallState = {
  user: { 0: { name: '' } },

};

export const checkedUserReducer = (state = initiallState, action) => {
  const { type, payload } = action;
  //console.log('1', payload)
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
