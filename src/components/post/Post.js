import React from 'react';
import fromNow from '../../utils/fromNow';
import isValidURL from '../../utils/urlValidator';
import commentsLabel from '../../utils/commentsLabel';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__wrapper">
        {post && post.thumbnail && isValidURL(post.thumbnail) && (
          <a href={post.thumbnail}>
            <div className="post__image">
              <img src={post.thumbnail} alt={`${post.title} - Img`} />
            </div>
          </a>
        )}
        <div className="post__body">
          <h5 className="post__title">{post.title}</h5>
        </div>
        <div className="post__footer">
          <div className="post__meta">
            <span className="post__author">{post.author}</span>
            <small>{fromNow(post.created)}</small>
          </div>

          <span className="post__comments">
            {commentsLabel(post.num_comments)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
