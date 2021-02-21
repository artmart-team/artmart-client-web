import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import picturesReducer from './picturesReducer.js';

const reducers = combineReducers({
  user: userReducer,
  pictures: picturesReducer
});

export default reducers;
