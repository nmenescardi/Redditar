import { combineReducers } from 'redux';
import { Action } from '../../enums';

export const postsInitialState = {
  posts: [],
  loading: false,
};

export function postsReducer(state = postsInitialState, action: any) {
  switch (action.type) {
    case Action.POSTS_SET_DATA:
      return {
        ...state,
        posts: [...action.payload],
      };

    case Action.POSTS_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}

const appInitialState = {
  selectedPostId: '',
  visited: [],
  dismissed: [],
  sidebarOpen: true,
};

function appReducer(state = appInitialState, action: any) {
  switch (action.type) {
    case Action.VISITED_ADD_POST:
      return {
        ...state,
        // Make it unique
        visited: [...state.visited, action.payload].filter(
          (v, i, a) => a.indexOf(v) === i
        ),
      };

    case Action.POSTS_DISMISS:
      return {
        ...state,
        dismissed: [...state.dismissed, ...action.payload].filter(
          (v, i, a) => a.indexOf(v) === i
        ),
      };

    case Action.LAYOUT_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case Action.POSTS_SELECT:
      return {
        ...state,
        selectedPostId: action.payload,
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});
