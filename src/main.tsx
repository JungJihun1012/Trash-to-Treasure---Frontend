import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './_reducer'; // Replace with your actual rootReducer import

// RootState type, representing the shape of your entire Redux store state
type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Define your middleware stack
const middlewares: Array<Middleware<{}, RootState> | ThunkMiddleware<RootState>> = [
  thunk,
  promiseMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const container = document.getElementById("root");
const root = createRoot(container!);

// Render your app with Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
