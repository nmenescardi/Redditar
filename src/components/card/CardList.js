import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <div className="card-list">
      <Card postId="1" />
      <Card postId="2" />
    </div>
  );
};

export default CardList;
