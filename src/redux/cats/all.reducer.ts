import {
  FETCH_ALL_FAILURE,
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
} from "./cats.types";
import { AnyAction } from "redux";
import { Category } from "../../graphql/types";

export type CatState = {
  data: Category | null;
  loading: boolean;
  error: string;
};

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const allCatReducer = (
  state: CatState = initialState,
  action: AnyAction
): CatState => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_ALL_SUCCESS:
      return { ...state, data: action.payload, error: "", loading: false };
    case FETCH_ALL_FAILURE:
      return { ...state, data: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default allCatReducer;
