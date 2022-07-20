import Store from '../store';
import { getSinglePost } from '../store/posts/selector';
import postsJson from './fixtures/posts.json';
import { postSetData } from '../store/posts/actions';

let store, initialState, posts, firstPost, secondPost;

beforeAll(() => {
  posts = postsJson.data.children;

  firstPost = posts[0].data;
  secondPost = posts[1].data;

  store = Store();
  store.store.dispatch(postSetData(posts));
  initialState = store.store.getState();
});

describe('selectors', () => {
  it('getSinglePost', () => {
    const post = getSinglePost(initialState, firstPost.id);

    expect(post.id).toEqual(firstPost.id);
    expect(post.permalink).toEqual(firstPost.permalink);
  });

  it.todo('wasVisited');
  it.todo('getPostsToShow');
  it.todo('isSidebarOpen');
  it.todo('getSelectedPostId');
  it.todo('isLoading');
});
