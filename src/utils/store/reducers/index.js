import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import commentReducer from './commentReducer.js';
import picturesReducer from './picturesReducer.js';
import optionsReducer from './optionsReducer.js';
import ordersReducer from './ordersReducer.js';
import orderUserReducer from './orderUserReducer.js';
import reviewReducer from './reviewReducer.js'

const reducers = combineReducers({
  user: userReducer,
  comments: commentReducer,
  pictures: picturesReducer,
  pictures: picturesReducer,
  options: optionsReducer,
  orders: ordersReducer,
  reviews: reviewReducer,
  userOrders: orderUserReducer
});

export default reducers;
