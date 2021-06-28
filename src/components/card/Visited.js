import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Visited = ({ ...rest }) => {
  return (
    <div {...rest}>
      <FaCircle className="mr-3" size={10} />
    </div>
  );
};
export default Visited;
