import React from 'react';

const Author = ({ author, ...rest }) => {
  return <div {...rest}>{author}</div>;
};

export default Author;
