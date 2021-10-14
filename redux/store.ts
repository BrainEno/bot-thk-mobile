import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { rootSaga } from "./rootSage";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger as any);
}

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
