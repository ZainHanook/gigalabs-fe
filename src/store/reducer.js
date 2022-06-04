import { combineReducers } from "redux";

import PostReducer from "./post/reducer";
import AuthReducer from "./auth/reducer";
const rootReducer = combineReducers({
  PostReducer,
  AuthReducer,
});

export default rootReducer;
