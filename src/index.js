import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import 'normalize.css';

import { App } from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
