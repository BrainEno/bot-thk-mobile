import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
// import { configureStore } from '@reduxjs/toolkit';

import { rootSaga } from './rootSage';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configStore() {
  const middlewares = [thunk, sagaMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}

export const store = configStore();

//TODO:use redux-toolkit
// export function getStore() {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: [thunk, sagaMiddleware, logger],
//   });
// }

sagaMiddleware.run(rootSaga);
