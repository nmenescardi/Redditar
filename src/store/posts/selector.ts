import { Post, State } from '../../types';

export const getSinglePost = (state: State, postId: string) => {
  const postData = state.posts.posts.find((e: Post) => e.data.id === postId);
  return postData?.data;
};

export const wasVisited = (state: State, postId: string) => {
  return state.app.visited.includes(postId);
};

export const getPostsToShow = (state: State) => {
  const postsToShow = state.posts.posts.filter(
    (post: Post) => !state.app.dismissed.includes(post.data.id)
  );

  return postsToShow;
};

export const isSidebarOpen = (state: State) => {
  return state.app.sidebarOpen;
};

export const getSelectedPostId = (state: State) => {
  return state.app.selectedPostId;
};

export const isLoading = (state: State) => {
  return state.posts.loading;
};
