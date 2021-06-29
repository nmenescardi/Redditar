import React from 'react';
import fromNow from '../../utils/fromNow';
import isValidURL from '../../utils/urlValidator';

const Post = ({ post }) => {
  return (
    <div className="post__deck">
      <div className="post__wrapper shadow">
        {post && post.thumbnail && isValidURL(post.thumbnail) && (
          <a href={post.thumbnail}>
            <img
              className="post__image"
              src={post.thumbnail}
              alt={`${post.title} - Img`}
            />
          </a>
        )}
        <div className="post__body">
          <h5 className="post__title">{post.title}</h5>
          <p className="post__title">Comments: {post.num_comments}</p>
        </div>
        <div className="post__footer">
          <span>
            {post.author} <br />
            <small>{fromNow(post.created)}</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
