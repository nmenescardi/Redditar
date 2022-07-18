/**
 * @jest-environment jsdom
 */

import postsJson from './fixtures/posts.json';
import Card from '../components/card/Card';
import { render } from '@testing-library/react';
import ProviderMock from '../__mocks__/ProviderMock';
import Store from '../store';
import { postSetData } from '../store/posts/actions';
import fromNow from '../utils/fromNow';

describe('Single Card', () => {
  const posts = postsJson.data.children;

  const store = Store();
  store.store.dispatch(postSetData(posts));

  const firstPost = posts[0].data;

  it('should render its props', () => {
    const card = render(
      <ProviderMock store={store.store}>
        <Card postId={firstPost.id}></Card>
      </ProviderMock>
    );

    const comments = card.container.querySelector('.card__comments');
    expect(comments).toHaveTextContent('958 Comments');

    const timeAgo = card.container.querySelector('.card__time');
    expect(timeAgo).toHaveTextContent(fromNow(firstPost.created));

    const author = card.container.querySelector('.card__author');
    expect(author).toHaveTextContent(firstPost.author);

    const thumbnail = card.container.querySelector('.card__thumbnail img');
    expect(thumbnail).toHaveAttribute('src', firstPost.thumbnail);

    const title = card.container.querySelector('.card__title');
    expect(title).toHaveTextContent(firstPost.title);
  });

  it.todo('Check onClick behavior: card shown visited');
  it.todo('Check onClick behavior: post details visible');
  it.todo('Check onClick behavior: toggle layout on mobile');

  it.todo('Check onClick Dismiss button');
});
