export const getSinglePost = (state, postId) => {
  const postData = state.posts.posts.find((e) => e.data.id === postId);
  console.log(`postData.data`, postData.data);
  return postData.data;
};
