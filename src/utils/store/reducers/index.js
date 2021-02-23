import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import commentReducer from './CommentReducer.js';
import picturesReducer from './picturesReducer.js';

const reducers = combineReducers({
  user: userReducer,
  description: commentReducer,
  pictures: picturesReducer
});

export default reducers;
