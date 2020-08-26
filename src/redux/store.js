import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { rootReducer } from './reducers';

const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
export const store = createStore(rootReducer, middleware);

export const persistor = persistStore(store);
