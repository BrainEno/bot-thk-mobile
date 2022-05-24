import { combineReducers } from 'redux';

import allCatReducer from './all.reducer';

export default combineReducers({
  allCat: allCatReducer,
});
