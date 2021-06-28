import React from 'react';

const Comments = ({ nro, ...rest }) => {
  return <div {...rest}> {nro} Comments</div>;
};

export default Comments;
