import { all, fork } from "redux-saga/effects";

import PostSaga from "./post/saga";
import AuthSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
  yield all([fork(AuthSaga)]);
}
