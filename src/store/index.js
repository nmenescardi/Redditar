import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { postReducer } from './posts/reducers';

const rootReducer = combineReducers({
  posts: postReducer,
});

const middlewares = [thunkMiddleware, logger];
const middleWareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
export default store;
