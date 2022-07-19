import Store from '../store';
import { postsReducer, postsInitialState } from '../store/posts/reducers';
import { postSetData, postSetLoading } from '../store/posts/actions';
import postsJson from './fixtures/posts.json';

describe('Post Reducer', () => {
  let initialState, emptyAction, posts;

  beforeAll(() => {
    initialState = undefined;
    emptyAction = {};
    posts = postsJson.data.children;

    //const defaultStore = Store();
  });

  it('should init default state', () => {
    expect(postsReducer(initialState, emptyAction)).toMatchObject(
      postsInitialState
    );
  });

  it('Should receive initial posts using the postSetData Action Creator', () => {
    const mockedPostsAction = postSetData(posts);

    const reducedState = postsReducer(initialState, mockedPostsAction);

    expect(reducedState.posts.length).toEqual(posts.length);
  });

  it('Should toggle loading flag using the postSetLoading Action Creator', () => {
    let mockedLoadingAction = postSetLoading(true);
    let reducedState = postsReducer(initialState, mockedLoadingAction);
    expect(reducedState.loading).toEqual(true);

    mockedLoadingAction = postSetLoading(false);
    reducedState = postsReducer(reducedState, mockedLoadingAction);
    expect(reducedState.loading).toEqual(false);
  });
});
