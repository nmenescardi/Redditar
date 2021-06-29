import React from 'react';
import Post from '../post/Post';

import { connect } from 'react-redux';
import { getSinglePost } from '../../store/posts/selector';

const Home = ({ post, sidebarOpen }) => {
  return (
    <section className={`home ${sidebarOpen ? 'home--full' : null} `}>
      <div className="home__inner">
        {post?.id ? (
          <Post post={post} />
        ) : (
          <img
            src="/images/bg/mpa-the-result.gif"
            alt="No post selected animation"
            style={{ height: '100%', width: '100%' }}
          />
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    post: getSinglePost(state, state.posts.postId),
    sidebarOpen: state.posts.sidebarOpen,
  };
};

export default connect(mapStateToProps)(Home);
