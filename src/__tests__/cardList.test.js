/**
 * @jest-environment jsdom
 */

import postsJson from './fixtures/posts.json';
import CardList from '../components/card/CardList';
import { render, screen } from '@testing-library/react';
import ProviderMock from '../__mocks__/ProviderMock';
import Store from '../store';
import { postSetData } from '../store/posts/actions';

describe('Card List', () => {
  const posts = postsJson.data.children;

  const store = Store();
  store.store.dispatch(postSetData(posts));

  const firstPost = posts[0].data;

  it('should render inner cards', () => {
    const cardList = render(
      <ProviderMock store={store.store}>
        <CardList postId={firstPost.id}></CardList>
      </ProviderMock>
    );

    const innerCards = screen.queryAllByTestId('card-container');
    expect(innerCards.length).toBe(10); // page size
  });
});
