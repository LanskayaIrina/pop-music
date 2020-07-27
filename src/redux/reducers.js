import { combineReducers } from 'redux';

import { authReducer } from './auth/reducer';
import { videoReducer } from './videos/reducer';

export const rootReducer = combineReducers({ auth: authReducer, video: videoReducer });
