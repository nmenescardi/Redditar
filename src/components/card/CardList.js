import React, { useState, useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Spinner from '../extra/Spinner';
import Pagination from 'react-js-pagination';
import Paginator from '../../utils/Paginator';
import { pageSize } from '../../utils/config';

const CardList = ({ posts, loading }) => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (posts.length) {
      setCurrentPosts([...Paginator(posts, offset, pageSize)]);
    } else {
      setCurrentPosts([]);
    }
  }, [posts, offset]);

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * pageSize;
    const data = Paginator(posts, newOffset, pageSize);
    setActivePage(pageNumber);
    setOffset(newOffset);
    setCurrentPosts([...data]);
  };

  return (
    <div className="card-list">
      <Spinner loading={loading} />

      {currentPosts.map((post, i) => (
        <Card key={post.data.id} postId={post.data.id} />
      ))}

      {currentPosts.length && (
        <div className="card-list__paginator">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={pageSize}
            totalItemsCount={posts.length}
            pageRangeDisplayed={5}
            onChange={(count) => handlePageChange(count)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});
export default connect(mapStateToProps)(CardList);
