import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./authTypes";
import { loginRequest, loginSuccess, loginFailed } from "./action";

import { message } from "antd";
import axios from "axios";

async function login(data) {
  const { email, password } = data.payload;
  return await axios.post("http://161.35.189.82:5001/auth/login", {
    email,
    password,
  });
}
function* handleLogin(data) {
  try {
    const response = yield call(login, data);
    console.log("Response => ", response);
    yield put(loginSuccess(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.tokens));
  } catch (error) {
    message.error(error.response.data.message);
    yield put(loginFailed(error.response));
  }
}

function* AuthSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export default AuthSaga;
