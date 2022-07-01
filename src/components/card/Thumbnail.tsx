import React from 'react';
import isValidURL from '../../utils/urlValidator';

type Props = {
  src: any;
  alt: any;
  [x: string]: any;
};

const Thumbnail: React.FC<Props> = ({ src, alt, ...rest }) => {
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
