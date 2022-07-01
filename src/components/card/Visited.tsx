import React from 'react';
import { FaCircle } from 'react-icons/fa';

type Props = {
  [x: string]: any;
};

const Visited: React.FC<Props> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <FaCircle className="mr-3" size={10} />
    </div>
  );
};
export default Visited;
