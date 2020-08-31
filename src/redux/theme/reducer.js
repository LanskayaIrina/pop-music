import { CHANGE_THEME } from './actionTypes';

const initialState = {
  theme: 'Light',
};

export const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};
