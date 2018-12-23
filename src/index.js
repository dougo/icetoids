import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';
import App from 'components/App';

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const app = (
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(app, root);
