import React, { useState, useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Spinner from '../extra/Spinner';
import Pagination from 'react-js-pagination';
import Paginator from '../../utils/Paginator';

const CardList = ({ posts, loading }) => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (posts.length) {
      setCurrentPosts([...Paginator(posts, offset, 10).data]);
    } else {
      setCurrentPosts([]);
    }
  }, [posts]);

  return (
    <div className="card-list">
      <Spinner loading={loading} />
      {currentPosts.map((post, i) => (
        <Card key={post.data.id} postId={post.data.id} />
      ))}

      <div className="card-list__paginator">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={posts.length}
          pageRangeDisplayed={5}
          onChange={(count) => console.log(count)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});
export default connect(mapStateToProps)(CardList);
