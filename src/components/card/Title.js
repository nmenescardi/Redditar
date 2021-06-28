import React from 'react';

const Title = ({ title, ...rest }) => {
  return <div {...rest}>{title}</div>;
};

export default Title;
