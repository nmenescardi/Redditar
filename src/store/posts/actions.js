import {
  POSTS_SET_DATA,
  POSTS_SET_LOADING,
  VISITED_ADD_POST,
  LAYOUT_TOGGLE_SIDEBAR,
  POSTS_DISMISS,
  POSTS_DISMISS_ALL,
  POSTS_SELECT,
} from './types';

import { GET_POSTS_URL } from '../../utils/config';

export function postSetData(posts) {
  return {
    type: POSTS_SET_DATA,
    payload: posts,
  };
}
export function postSetLoading(loadingFlag) {
  return {
    type: POSTS_SET_LOADING,
    payload: loadingFlag,
  };
}
export function visitedAddPost(postId) {
  return {
    type: VISITED_ADD_POST,
    payload: postId,
  };
}
export function layoutToggleSidebar() {
  return {
    type: LAYOUT_TOGGLE_SIDEBAR,
  };
}
export function postDismiss(postId) {
  return {
    type: POSTS_DISMISS,
    payload: postId,
  };
}
export function postDismissAll() {
  return {
    type: POSTS_DISMISS_ALL,
  };
}
export function selectPost(postId) {
  return {
    type: POSTS_SELECT,
    payload: postId,
  };
}

export const getPosts = () => (dispatch, getState) => {
  const { posts } = getState().posts;

  if (posts.length === 0) {
    dispatch(postSetLoading(true));

    fetch(GET_POSTS_URL)
      .then((request) => request.json())
      .then((data) => {
        dispatch(postSetData(data.data.children));
        dispatch(postSetLoading(false));
      });
  } else {
    dispatch(postSetData(posts));
  }
};
