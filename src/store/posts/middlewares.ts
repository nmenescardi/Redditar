import { Middleware } from 'redux';
import { postDismiss } from './actions';
import { Post } from '../../types';
import { Action } from '../../enums';

export const dismissAllMiddleware: Middleware =
  (store) => (next) => (action) => {
    const state = store.getState();

    if (Action.POSTS_DISMISS_ALL === action.type) {
      const allPostsId = state.posts.posts.map((post: Post) => post.data.id);
      store.dispatch(postDismiss(allPostsId));
    }

    next(action);
  };
