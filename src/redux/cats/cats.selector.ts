import { RootState } from "../rootReducer";
import { createSelector } from "reselect";
import { CatState } from "./all.reducer";

export const selectAllCat = (state: RootState) => state.cats.allCat;

export const selectAllCatSelector = createSelector(
  [selectAllCat],
  (allCat: CatState) => allCat.data
);
