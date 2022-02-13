import { combineReducers } from "redux";
import auth from "./auth";
import cats from "./cats";
import follow from "./follow";

const rootReducer = combineReducers({
  auth,
  cats,
  follow,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
