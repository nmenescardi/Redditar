import React from 'react';
import { connect } from 'react-redux';
import { postDismissAll } from '../../store/posts/actions';

type Props = {
  postDismissAll: () => void;
  [x: string]: any;
};

const DismissAll: React.FC<Props> = ({ postDismissAll, ...rest }) => {
  return (
    <div {...rest} onClick={() => postDismissAll()}>
      <span>Dismiss All</span>
    </div>
  );
};

const mapDispatchToProps = {
  postDismissAll,
};
export default connect(null, mapDispatchToProps)(DismissAll);
