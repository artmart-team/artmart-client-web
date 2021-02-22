import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import commentReducer from './CommentReducer.js';

const reducers = combineReducers({
  user: userReducer,
  comment: commentReducer
});

export default reducers;
