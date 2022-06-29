import { combineReducers } from 'redux';
import {
  POSTS_SET_DATA,
  POSTS_SET_LOADING,
  VISITED_ADD_POST,
  LAYOUT_TOGGLE_SIDEBAR,
  POSTS_DISMISS,
  POSTS_SELECT,
} from './types';

const postsInitialState = {
  posts: [],
  loading: false,
};

function postsReducer(state = postsInitialState, action) {
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

function appReducer(state = appInitialState, action) {
  switch (action.type) {
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
        dismissed: [...state.dismissed, ...action.payload].filter(
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
