import React from 'react';
import Visited from './Visited';
import Title from './Title';
import Thumbnail from './Thumbnail';
import Comments from './Comments';

const Card = () => {
  return (
    <div className="card">
      <Visited wasVisited={true} />
      <Title title="Some Title" />
      <Thumbnail src={'https://images.com/image.jpg'} alt="an image" />
      <button>Dismiss</button>
      <Comments nro="12" />
    </div>
  );
};

export default Card;
