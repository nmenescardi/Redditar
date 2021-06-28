import React from 'react';
import ReactDOM from 'react-dom';
import Redditar from './Redditar';
import './Redditar.scss';
import store from './store';
import { Provider } from 'react-redux';
import { getPosts } from './store/posts/actions';

store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <Redditar />
  </Provider>,
  document.getElementById('root')
);
