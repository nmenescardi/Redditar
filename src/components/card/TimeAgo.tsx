import React from 'react';
import fromNow from '../../utils/fromNow';

type Props = {
  time: any;
  [x: string]: any;
};

const TimeAgo: React.FC<Props> = ({ time, ...rest }) => {
  return <div {...rest}>{fromNow(time)}</div>;
};

export default TimeAgo;
