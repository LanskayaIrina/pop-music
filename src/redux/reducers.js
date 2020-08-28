import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth/reducer';
import { videoReducer } from './videos/reducer';
import { checkedUserReducer } from './checkedUser/reducer';
import { favoriteVideoReducer } from './favorites/reducer';
import { rememberedUserReducer } from './rememberedUser/reducer';

const rememberedUserPersistConfig = {
  key: 'rememberedUser',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const favoriteVideosPersistConfig = {
  key: 'favoriteVideos',
  storage,
}

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  video: videoReducer,
  checkedUser: checkedUserReducer,
  rememberedUser: persistReducer(rememberedUserPersistConfig, rememberedUserReducer),
  favoriteVideos: persistReducer(favoriteVideosPersistConfig, favoriteVideoReducer),
});
