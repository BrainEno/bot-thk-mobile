import { combineReducers } from "redux";
import auth from "./auth";
import cats from "./cats";

const rootReducer = combineReducers({
  auth,
  cats,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
