import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSage";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "remote-redux-devtools";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
