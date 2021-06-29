import {
  POSTS_SET_DATA,
  POSTS_SET_LOADING,
  VISITED_ADD_POST,
  LAYOUT_TOGGLE_SIDEBAR,
  POSTS_DISMISS,
  POSTS_DISMISS_ALL,
  POSTS_SELECT,
} from './types';

const initialState = {
  posts: [],
  postId: '',
  visited: [],
  dismissed: [],
  loading: false,
  sidebarOpen: true,
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_SET_DATA:
      return {
        ...state,
        posts: [...action.payload],
      };

    case POSTS_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case VISITED_ADD_POST:
      return {
        ...state,
        // Make it unique
        visited: [...state.visited, action.payload].filter(
          (v, i, a) => a.indexOf(v) === i
        ),
      };

    case POSTS_DISMISS:
      return {
        ...state,
        dismissed: [...state.dismissed, action.payload].filter(
          (v, i, a) => a.indexOf(v) === i
        ),
      };

    case POSTS_DISMISS_ALL:
      const allPostsId = state.posts.map((post) => post.data.id);
      return {
        ...state,
        dismissed: [...state.dismissed, ...allPostsId].filter(
          (v, i, a) => a.indexOf(v) === i
        ),
      };

    case LAYOUT_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case POSTS_SELECT:
      return {
        ...state,
        postId: action.payload,
      };

    default:
      return state;
  }
}
