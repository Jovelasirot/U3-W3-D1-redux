import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favReducer from "../reducers/favorites";
import jobsReducer from "../reducers/jobs";

const globalReducer = combineReducers({
  fav: favReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
