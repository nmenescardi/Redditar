/**
 * @jest-environment jsdom
 */

import {
  postSetData,
  postSetLoading,
  postDismiss,
} from '../store/posts/actions';
import { Action } from '../enums';

describe('Store Actions', () => {
  test('postSetData contains the proper action type', () => {
    expect(postSetData()).toMatchObject({
      type: Action.POSTS_SET_DATA,
    });
  });

  test('postSetLoading contains the proper action type and return proper payload', () => {
    const testObj = (loadingFlag) =>
      expect(postSetLoading(loadingFlag)).toMatchObject({
        payload: loadingFlag,
        type: Action.POSTS_SET_LOADING,
      });

    testObj(false);
    testObj(true);
  });

  test('postDismiss: proper action type and payload', () => {
    const postIDs = [1, 4, 33, 55];
    expect(postDismiss(postIDs)).toMatchObject({
      payload: postIDs,
      type: Action.POSTS_DISMISS,
    });
  });

  test('postDismiss: Single ID return array as payload', () => {
    const postIDs = 1;
    expect(postDismiss(postIDs)).toMatchObject({
      payload: [postIDs],
      type: Action.POSTS_DISMISS,
    });
  });
});
