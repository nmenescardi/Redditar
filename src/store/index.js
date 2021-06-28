import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { postReducer } from './posts/reducers';

const rootReducer = combineReducers({
  posts: postReducer,
});

const middleWareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleWareEnhancer);
export default store;
