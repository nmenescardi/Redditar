import React from 'react';

type Props = {
  title: any;
  [x: string]: any;
};

const Title: React.FC<Props> = ({ title, ...rest }) => {
  return <div {...rest}>{title}</div>;
};

export default Title;
