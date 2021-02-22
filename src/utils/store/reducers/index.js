import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import commentReducer from './CommentReducer.js';
import picturesReducer from './picturesReducer.js';

const reducers = combineReducers({
  user: userReducer,
  comment: commentReducer,
  pictures: picturesReducer
});

export default reducers;
