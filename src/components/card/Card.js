import React from 'react';
import Visited from './Visited';
import Title from './Title';
import Author from './Author';
import Thumbnail from './Thumbnail';
import Comments from './Comments';
import TimeAgo from './TimeAgo';
import { FaChevronRight, FaTimes } from 'react-icons/fa';

const Card = ({ postId }) => {
  return (
    <div className="card card--visited">
      <div className="card__header">
        <div className="card__content">
          <div className="card__meta">
            <div className="card__title-wrapper">
              <Visited wasVisited={true} className="card__visited" />
              <Author title="TheAuthor" className="card__author" />
            </div>
            <TimeAgo className="card__time" time="16 hours ago" />
          </div>
          <Thumbnail
            src={`https://picsum.photos/200/200?random=${postId}`}
            alt="an image"
            className="card__thumbnail"
          />
          <Title title="Some Title" className="card__title" />
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
        <Comments nro="12" className="card__comments" />
      </div>
      <hr className="card__divider" />
    </div>
  );
};

export default Card;
