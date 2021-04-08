import { combineReducers } from 'redux';
import roomsReducer from './roomsSlice';
import usersReducer from './usersSlice';

export default combineReducers({
  usersReducer,
  roomsReducer,
});
