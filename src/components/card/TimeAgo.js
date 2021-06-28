import React from 'react';
import fromNow from '../../utils/fromNow';

const TimeAgo = ({ time, ...rest }) => {
  return <div {...rest}>{fromNow(time)}</div>;
};

export default TimeAgo;
