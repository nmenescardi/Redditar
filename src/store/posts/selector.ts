import { Post, Store, postID } from '../../types';

export const getSinglePost = (state: Store, postId: postID) => {
  const postData = state.posts.posts.find((e: Post) => e.data.id === postId);
  return postData?.data;
};

export const wasVisited = (state: Store, postId: postID) => {
  return state.app.visited.includes(postId);
};

export const getPostsToShow = (state: Store) => {
  const postsToShow = state.posts.posts.filter(
    (post: Post) => !state.app.dismissed.includes(post.data.id)
  );

  return postsToShow;
};

export const isSidebarOpen = (state: Store) => {
  return state.app.sidebarOpen;
};

export const getSelectedPostId = (state: Store) => {
  return state.app.selectedPostId;
};

export const isLoading = (state: Store) => {
  return state.posts.loading;
};
