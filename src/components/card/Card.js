import React, { useEffect } from 'react';
import Visited from './Visited';
import Title from './Title';
import Author from './Author';
import Thumbnail from './Thumbnail';
import Comments from './Comments';
import TimeAgo from './TimeAgo';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getSinglePost, wasVisited } from '../../store/posts/selector';
import { visitedAddPost } from '../../store/posts/actions';

const Card = ({ post, visitedAddPost, wasVisited }) => {
  /* useEffect(() => {
    console.log(post.id);
  }, []); */
  return (
    <div className={`card ${wasVisited && 'card--visited'}`}>
      <div
        className="card__header"
        onClick={() => {
          visitedAddPost(post.id);
        }}
      >
        <div className="card__content">
          <div className="card__meta">
            <div className="card__title-wrapper">
              <Visited className="card__visited" />
              <Author author={post.author} className="card__author" />
            </div>
            <TimeAgo className="card__time" time={post.created} />
          </div>
          <Thumbnail
            src={post.thumbnail}
            alt="an image"
            className="card__thumbnail"
          />
          <Title title={post.title} className="card__title" />
        </div>

        <div className="card__arrow">
          <FaChevronRight />
        </div>
      </div>

      <div className="card__footer">
        <div className="card__dismiss">
          <FaTimes />
          <span>Dismiss</span>
        </div>
        <Comments nro={post.num_comments} className="card__comments" />
      </div>
      <hr className="card__divider" />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    post: getSinglePost(state, props.postId),
    wasVisited: wasVisited(state, props.postId),
  };
};
const mapDispatchToProps = {
  visitedAddPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
