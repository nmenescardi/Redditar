import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { postReducer } from './posts/reducers';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  posts: postReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['posts'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = () => {
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
export default Store;
