import { POSTS_SET_DATA, POSTS_SET_LOADING, VISITED_ADD_POST } from './types';

const initialState = {
  posts: [],
  visited: [],
  loading: false,
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
    default:
      return state;
  }
}
