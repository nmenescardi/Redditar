import React from 'react';

const Thumbnail = ({ src, alt, ...rest }) => {
  return (
    <div {...rest}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
