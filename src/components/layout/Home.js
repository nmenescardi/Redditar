import React from 'react';
import Post from '../post/Post';

import { connect } from 'react-redux';
import {
  getSinglePost,
  isSidebarOpen,
  getSelectedPostId,
} from '../../store/posts/selector';

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
    post: getSinglePost(state, getSelectedPostId(state)),
    sidebarOpen: isSidebarOpen(state),
  };
};

export default connect(mapStateToProps)(Home);
