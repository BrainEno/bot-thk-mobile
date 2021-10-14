import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ auth });

export default persistReducer(persistConfig, rootReducer);
