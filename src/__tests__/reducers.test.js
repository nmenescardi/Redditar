import {
  postsReducer,
  postsInitialState,
  appReducer,
  appInitialState,
} from '../store/posts/reducers';
import {
  postSetData,
  postSetLoading,
  visitedAddPost,
} from '../store/posts/actions';
import postsJson from './fixtures/posts.json';

let initialState, emptyAction, posts, firstPostID, secondPostID;

beforeAll(() => {
  initialState = undefined;
  emptyAction = {};
  posts = postsJson.data.children;
  firstPostID = posts[0].data.id;
  secondPostID = posts[1].data.id;
});

describe('Post Reducer', () => {
  it('should init default state', () => {
    expect(postsReducer(initialState, emptyAction)).toMatchObject(
      postsInitialState
    );
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

describe('App Reducer', () => {
  it('should init default state', () => {
    expect(appReducer(appInitialState, emptyAction)).toMatchObject(
      appInitialState
    );
  });

  describe('Should add mark a posts as visited using the visitedAddPost Action Creator', () => {
    it('visitedAddPost - mark initial post as visited', () => {
      const mockedVisitedPostAction = visitedAddPost(firstPostID);

      const reducedState = appReducer(initialState, mockedVisitedPostAction);

      expect(reducedState.visited[0]).toEqual(firstPostID);
    });

    it('visitedAddPost - mark several posts as visited without repeated IDs', () => {
      let mockedVisitedPostAction = visitedAddPost(firstPostID);
      let reducedState = appReducer(initialState, mockedVisitedPostAction);

      mockedVisitedPostAction = visitedAddPost(secondPostID);
      reducedState = appReducer(reducedState, mockedVisitedPostAction);

      mockedVisitedPostAction = visitedAddPost(firstPostID);
      reducedState = appReducer(reducedState, mockedVisitedPostAction);

      mockedVisitedPostAction = visitedAddPost(secondPostID);
      reducedState = appReducer(reducedState, mockedVisitedPostAction);

      expect(reducedState.visited).toHaveLength(2);
      expect(reducedState.visited).toContain(firstPostID);
      expect(reducedState.visited).toContain(secondPostID);
    });
  });
});
