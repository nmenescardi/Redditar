import { POSTS_DISMISS_ALL } from './types';
import { postDismiss } from './actions';

export const dismissAllMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (POSTS_DISMISS_ALL === action.type) {
    const allPostsId = state.posts.posts.map((post) => post.data.id);
    store.dispatch(postDismiss(allPostsId));
  }

  next(action);
};
