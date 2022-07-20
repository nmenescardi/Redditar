import React from 'react';
import Visited from './Visited';
import Title from './Title';
import Author from './Author';
import Thumbnail from './Thumbnail';
import Comments from './Comments';
import TimeAgo from './TimeAgo';
import isMobile from '../../utils/isMobile';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getSinglePost, wasVisited } from '../../store/posts/selector';
import {
  visitedAddPost,
  postDismiss,
  selectPost,
  layoutToggleSidebar,
} from '../../store/posts/actions';
import { PostData, postID, Store } from '../../types';
import { Action } from '../../enums';

type Props = {
  post: PostData;
  visitedAddPost: (postId: postID) => {
    type: Action;
    payload: postID;
  };
  wasVisited: boolean;
  postDismiss: (postId: postID[] | postID) => {
    type: Action;
    payload: postID[];
  };
  selectPost: (postId: postID) => {
    type: Action;
    payload: postID;
  };
  layoutToggleSidebar: () => {
    type: Action;
  };
};

const Card: React.FC<Props> = ({
  post,
  visitedAddPost,
  wasVisited,
  postDismiss,
  selectPost,
  layoutToggleSidebar,
}) => {
  return (
    <div
      className={`card ${wasVisited && 'card--visited'}`}
      data-testid="card-container"
    >
      <div
        className="card__header"
        data-testid="card-header"
        onClick={() => {
          visitedAddPost(post.id);
          selectPost(post.id);
          isMobile() && layoutToggleSidebar();
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
            alt={`${post.title} - Thumbnail`}
            className="card__thumbnail"
          />
          <Title title={post.title} className="card__title" />
        </div>

        <div className="card__arrow">
          <FaChevronRight />
        </div>
      </div>

      <div className="card__footer">
        <div
          className="card__dismiss"
          onClick={() => postDismiss(post.id)}
          data-testid="card-dismiss-button"
        >
          <FaTimes />
          <span>Dismiss</span>
        </div>
        <Comments nro={post.num_comments} className="card__comments" />
      </div>
      <hr className="card__divider" />
    </div>
  );
};

const mapStateToProps = (state: Store, props: any) => {
  return {
    post: getSinglePost(state, props.postId),
    wasVisited: wasVisited(state, props.postId),
  };
};
const mapDispatchToProps = {
  visitedAddPost,
  postDismiss,
  selectPost,
  layoutToggleSidebar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card as any);
