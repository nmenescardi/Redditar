import React, { useState, useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import Spinner from '../extra/Spinner';
import Pagination from 'react-js-pagination';
import Paginator from '../../utils/Paginator';
import { pageSize } from '../../utils/config';
import { getPostsToShow, isLoading } from '../../store/posts/selector';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Post, Store } from '../../types';

type Props = {
  posts: Post[];
  loading: boolean;
};

const CardList: React.FC<Props> = ({ posts, loading }) => {
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (posts.length) {
      setCurrentPosts([...Paginator(posts, offset, pageSize)]);
    } else {
      setCurrentPosts([]);
    }
  }, [posts, offset]);

  const handlePageChange = (pageNumber: number) => {
    const newOffset = (pageNumber - 1) * pageSize;
    const data = Paginator(posts, newOffset, pageSize);
    setActivePage(pageNumber);
    setOffset(newOffset);
    setCurrentPosts([...data]);
  };

  return (
    <div className="card-list">
      <Spinner loading={loading} />

      <TransitionGroup>
        {currentPosts.map((post, i) => (
          <CSSTransition classNames="post" timeout={350} key={post.data.id}>
            <Card postId={post.data.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {currentPosts.length && (
        <div className="card-list__paginator">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={pageSize}
            totalItemsCount={posts.length}
            pageRangeDisplayed={5}
            onChange={(count: number) => handlePageChange(count)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: Store) => ({
  posts: getPostsToShow(state),
  loading: isLoading(state),
});
export default connect(mapStateToProps)(CardList);
