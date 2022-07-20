/**
 * @jest-environment jsdom
 */

import postsJson from './fixtures/posts.json';
import Card from '../components/card/Card';
import { render, screen } from '@testing-library/react';
import ProviderMock from '../__mocks__/ProviderMock';
import Store from '../store';
import { postSetData } from '../store/posts/actions';
import fromNow from '../utils/fromNow';
import userEvent from '@testing-library/user-event';

let card, posts, store, firstPost, cardHeader, dismissButton;
beforeEach(() => {
  posts = postsJson.data.children;

  store = Store();
  store.store.dispatch(postSetData(posts));

  firstPost = posts[0].data;

  card = render(
    <ProviderMock store={store.store}>
      <Card postId={firstPost.id}></Card>
    </ProviderMock>
  );

  cardHeader = screen.queryByTestId('card-header');
  dismissButton = screen.getByTestId('card-dismiss-button');
});

describe('Single Card', () => {
  it('should render its props', () => {
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

  it('Checks onClick behavior: card shown visited', () => {
    // Empty at the beginning
    expect(store.store.getState().app.visited.length).toEqual(0);

    userEvent.click(cardHeader);

    expect(store.store.getState().app.visited.length).toEqual(1);
    expect(store.store.getState().app.visited).toContain(firstPost.id);
  });

  it('Checks onClick behavior: clicking more than once only add to visited just once', () => {
    userEvent.click(cardHeader);
    expect(store.store.getState().app.visited.length).toEqual(1);

    userEvent.click(cardHeader);
    // Still only one
    expect(store.store.getState().app.visited.length).toEqual(1);
  });

  it('Checks onClick behavior: post details visible', () => {
    // Empty
    expect(store.store.getState().app.selectedPostId).toBe('');

    userEvent.click(cardHeader);
    expect(store.store.getState().app.selectedPostId).toBe(firstPost.id);
  });

  it('Checks onClick Dismiss button', () => {
    expect(store.store.getState().app.dismissed.length).toEqual(0);
    userEvent.click(dismissButton);

    expect(store.store.getState().app.dismissed.length).toEqual(1);
    expect(store.store.getState().app.dismissed).toContain(firstPost.id);
  });

  it('Checks onClick Dismiss button: clicking more than once only add to dismissed just once', () => {
    userEvent.click(dismissButton);
    expect(store.store.getState().app.dismissed.length).toEqual(1);

    userEvent.click(dismissButton);
    // Still only one
    expect(store.store.getState().app.dismissed.length).toEqual(1);
  });
});
