import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import alert from './alert'
export default combineReducers({
  simpleReducer,alert
});
