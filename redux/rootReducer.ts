import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import auth from "./auth";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers({
  auth,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
