// redux/store.js
import { createStore, combineReducers } from 'redux';
import postReducer from './reducers';

const rootReducer = combineReducers({
  posts: postReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;