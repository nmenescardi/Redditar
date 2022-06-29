import { Middleware } from 'redux';
import { POSTS_DISMISS_ALL } from './types';
import { postDismiss } from './actions';
import { Post } from '../../types';

export const dismissAllMiddleware: Middleware =
  (store) => (next) => (action) => {
    const state = store.getState();

    if (POSTS_DISMISS_ALL === action.type) {
      const allPostsId = state.posts.posts.map((post: Post) => post.data.id);
      store.dispatch(postDismiss(allPostsId));
    }

    next(action);
  };
