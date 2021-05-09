import { combineReducers } from "redux";

import auth from "./auth";
import { articleListReducer } from "./articleList"

export default combineReducers({
  auth, articleListReducer
});
