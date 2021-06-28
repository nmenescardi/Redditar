import {
  POSTS_SET_DATA,
  POSTS_SET_LOADING,
  VISITED_ADD_POST,
  LAYOUT_TOGGLE_SIDEBAR,
} from './types';

const initialState = {
  posts: [],
  visited: [],
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

    case LAYOUT_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    default:
      return state;
  }
}
