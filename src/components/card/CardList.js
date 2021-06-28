import React, { useState } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const CardList = ({ posts }) => {
  return (
    <div className="card-list">
      {posts.map((post, i) => (
        <Card key={post.data.id} postId={post.data.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});
export default connect(mapStateToProps)(CardList);
