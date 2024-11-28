import { applyMiddleware, legacy_createStore, combineReducers } from "redux";

import UserReducer from "./LoginReducer/reducer";
import BlogReducer from "./BlogReducer/reducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  user: UserReducer,
  blog: BlogReducer,
});


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
