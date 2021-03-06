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
  postDismiss,
  layoutToggleSidebar,
  selectPost,
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

  it('Should add initial posts data using the postSetData Action Creator', () => {
    const mockedPostDataAction = postSetData(posts);

    const reducedState = postsReducer(initialState, mockedPostDataAction);

    console.log('reducedState', reducedState);
    expect(reducedState.posts.length).toEqual(posts.length);
    expect(reducedState.posts[0].data.id).toEqual(posts[0].data.id);
    expect(reducedState.posts[5].data.id).toEqual(posts[5].data.id);
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

  describe('Should mark posts as visited using the visitedAddPost Action Creator', () => {
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

  describe('Should mark posts as dismissed using the postDismiss Action Creator', () => {
    it('postDismiss - mark initial post as dismissed', () => {
      const mockedDismissedPostAction = postDismiss(firstPostID);

      const reducedState = appReducer(initialState, mockedDismissedPostAction);

      expect(reducedState.dismissed[0]).toEqual(firstPostID);
    });

    it('postDismiss - mark several posts as dismissed without repeated IDs', () => {
      let mockedDismissedPostAction = postDismiss(firstPostID);
      let reducedState = appReducer(initialState, mockedDismissedPostAction);

      mockedDismissedPostAction = postDismiss(secondPostID);
      reducedState = appReducer(reducedState, mockedDismissedPostAction);

      mockedDismissedPostAction = postDismiss(firstPostID);
      reducedState = appReducer(reducedState, mockedDismissedPostAction);

      mockedDismissedPostAction = postDismiss(secondPostID);
      reducedState = appReducer(reducedState, mockedDismissedPostAction);

      expect(reducedState.dismissed).toHaveLength(2);
      expect(reducedState.dismissed).toContain(firstPostID);
      expect(reducedState.dismissed).toContain(secondPostID);
    });
  });

  it('Should toggle the sidebar using the layoutToggleSidebar Action Creator', () => {
    let reducedState = appReducer(initialState, layoutToggleSidebar());
    expect(reducedState.sidebarOpen).toStrictEqual(false);

    reducedState = appReducer(reducedState, layoutToggleSidebar());
    expect(reducedState.sidebarOpen).toStrictEqual(true);
  });

  it('Should select posts the selectPost Action Creator', () => {
    let reducedState = appReducer(initialState, selectPost(firstPostID));
    expect(reducedState.selectedPostId).toEqual(firstPostID);

    reducedState = appReducer(reducedState, selectPost(secondPostID));
    expect(reducedState.selectedPostId).toEqual(secondPostID);
  });
});
