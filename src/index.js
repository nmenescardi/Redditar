import React from 'react';
import ReactDOM from 'react-dom';
import Redditar from './Redditar';
import './Redditar.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './store';
import { getPosts } from './store/posts/actions';
import ResetButton from './components/extra/ResetButton';

const store = Store();
store.store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Redditar />
      <ResetButton handleReset={store.persistor.purge} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
