export const getSinglePost = (state, postId) => {
  const postData = state.posts.posts.find((e) => e.data.id === postId);
  return postData.data;
};

export const wasVisited = (state, postId) => {
  return state.posts.visited.includes(postId);
};

export const getPostsToShow = (state) => {
  const postsToShow = state.posts.posts.filter(
    (post) => !state.posts.dismissed.includes(post.data.id)
  );

  return postsToShow;
};
