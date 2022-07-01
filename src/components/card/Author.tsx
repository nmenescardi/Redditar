import React from 'react';

type Props = {
  author: string;
  [x: string]: any;
};

const Author: React.FC<Props> = ({ author, ...rest }) => {
  return <div {...rest}>{author}</div>;
};

export default Author;
