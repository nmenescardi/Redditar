import React from 'react';
import { connect } from 'react-redux';
import { postDismissAll } from '../../store/posts/actions';

const DismissAll = ({ postDismissAll, ...rest }) => {
  return (
    <div {...rest} onClick={() => postDismissAll()}>
      <button>Dismiss All</button>
    </div>
  );
};

const mapDispatchToProps = {
  postDismissAll,
};
export default connect(null, mapDispatchToProps)(DismissAll);
