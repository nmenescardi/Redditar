export const getSinglePost = (state, postId) => {
  const postData = state.posts.posts.find((e) => e.data.id === postId);
  return postData?.data;
};

export const wasVisited = (state, postId) => {
  return state.app.visited.includes(postId);
};

export const getPostsToShow = (state) => {
  const postsToShow = state.posts.posts.filter(
    (post) => !state.app.dismissed.includes(post.data.id)
  );

  return postsToShow;
};

export const isSidebarOpen = (state) => {
  return state.app.sidebarOpen;
};

export const getSelectedPostId = (state) => {
  return state.app.selectedPostId;
};

export const isLoading = (state) => {
  return state.posts.loading;
};
