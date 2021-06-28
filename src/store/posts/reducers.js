import { POSTS_SET_DATA, POSTS_SET_LOADING } from './types';

const initialState = {
  posts: [],
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
    default:
      return state;
  }
}
