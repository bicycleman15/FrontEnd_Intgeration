import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(promise, thunk, logger),
  );
}
