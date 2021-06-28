import React from 'react';
import isValidURL from '../../utils/urlValidator';

const Thumbnail = ({ src, alt, ...rest }) => {
  return (
    <>
      {src && isValidURL(src) && (
        <div {...rest}>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
};

export default Thumbnail;
