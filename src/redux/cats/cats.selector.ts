import { createSelector } from 'reselect';

import type { RootState } from '../rootReducer';

import type { CatState } from './all.reducer';

export const selectAllCat = (state: RootState) => state.cats.allCat;

export const selectAllCatSelector = createSelector(
  [selectAllCat],
  (allCat: CatState) => allCat.data
);
