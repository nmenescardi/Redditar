import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootReducer } from './posts/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dismissAllMiddleware } from './posts/middlewares';

const Store = () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app'],
    blacklist: ['posts'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middlewares = [thunkMiddleware, dismissAllMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
export default Store;
