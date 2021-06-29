import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootReducer } from './posts/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dimissAllMiddleware } from './posts/middlewares';

const Store = () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app'],
    blacklist: ['posts'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middlewares = [thunkMiddleware, logger, dimissAllMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
export default Store;
