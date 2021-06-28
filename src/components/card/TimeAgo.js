import React from 'react';

const TimeAgo = ({ time, ...rest }) => {
  return <div {...rest}>{time}</div>;
};

export default TimeAgo;
