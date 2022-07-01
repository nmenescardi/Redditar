import React from 'react';
import commentsLabel from '../../utils/commentsLabel';

type Props = {
  nro: any;
  [x: string]: any;
};

const Comments: React.FC<Props> = ({ nro, ...rest }) => {
  return <div {...rest}>{commentsLabel(nro)}</div>;
};

export default Comments;
