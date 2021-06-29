import React from 'react';
import Post from '../post/Post';

import { connect } from 'react-redux';
import { getSinglePost } from '../../store/posts/selector';

const Home = ({ post }) => {
  return (
    <section className="home home--full">
      <h2>Home</h2>
      {post?.id ? (
        <Post post={post} />
      ) : (
        <img
          src="/images/bg/mpa-the-result.gif"
          alt="No post selected animation"
          style={{ height: '100%', width: '100%' }}
        />
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    post: getSinglePost(state, state.posts.postId),
  };
};

export default connect(mapStateToProps)(Home);
