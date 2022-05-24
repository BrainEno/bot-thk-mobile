/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Dispatch } from 'redux';

import type { Category } from '../../graphql/types';
import { getCatWithBlogs } from '../../requests/cats';
import { withMatcher } from '../auth/auth.types';

import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from './cats.types';

export const fetchAllCatRequest = withMatcher(() => ({
  type: FETCH_ALL_REQUEST,
}));

export const fetchAllCatSuccess = withMatcher((cat: Category) => ({
  type: FETCH_ALL_SUCCESS,
  payload: cat,
}));

export const fetchAllCatFailure = withMatcher((error: string) => ({
  type: FETCH_ALL_FAILURE,
  payload: error,
}));

export const fetchAllCatAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchAllCatRequest());
    try {
      const data = await getCatWithBlogs('all');
      dispatch(fetchAllCatSuccess(data));
    } catch (error: any) {
      console.log(error.message);
      const err: string = error.message || error.toString();
      dispatch(fetchAllCatFailure(err));
    }
  };
};
