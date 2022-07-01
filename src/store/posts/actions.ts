import { Dispatch } from 'redux';
import { Action } from '../../enums';
import { Post, postID } from '../../types';
import { GET_POSTS_URL } from '../../utils/config';

export function postSetData(posts: Post[]) {
  return {
    type: Action.POSTS_SET_DATA,
    payload: posts,
  };
}
export function postSetLoading(loadingFlag: boolean) {
  return {
    type: Action.POSTS_SET_LOADING,
    payload: loadingFlag,
  };
}
export function visitedAddPost(postId: postID) {
  return {
    type: Action.VISITED_ADD_POST,
    payload: postId,
  };
}
export function layoutToggleSidebar() {
  return {
    type: Action.LAYOUT_TOGGLE_SIDEBAR,
  };
}
export function postDismiss(postIds: postID[] | postID) {
  return {
    type: Action.POSTS_DISMISS,
    payload: postIds instanceof Array ? postIds : [postIds],
  };
}
export function postDismissAll() {
  return {
    type: Action.POSTS_DISMISS_ALL,
  };
}
export function selectPost(postId: postID) {
  return {
    type: Action.POSTS_SELECT,
    payload: postId,
  };
}

export const getPosts = () => (dispatch: Dispatch) => {
  dispatch(postSetLoading(true));

  fetch(GET_POSTS_URL)
    .then((request) => request.json())
    .then((data) => {
      dispatch(postSetData(data.data.children));
      dispatch(postSetLoading(false));
    });
};
