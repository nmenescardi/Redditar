import React from 'react';
import commentsLabel from '../../utils/commentsLabel';
const Comments = ({ nro, ...rest }) => {
  return <div {...rest}>{commentsLabel(nro)}</div>;
};

export default Comments;
