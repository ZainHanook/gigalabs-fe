import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_DETAILS,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_COMMENT_FAILED,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_REQUEST,
} from "./postTypes";

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
  createPostsFail,
  createPostRequest,
  creatPostSuccess,
  createCommentRequest,
  createCommentSuccess,
  createCommentFailed,
} from "./action";
import { getPostDetails } from "../../module/backend_helper";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"))?.access;
console.log(token);

async function getPosts() {
  return await axios.get("http://161.35.189.82:5001/post", {
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
  });
}

async function createPost(payload) {
  return await axios.post("http://161.35.189.82:5001/post", payload, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
}

async function createComment(payload) {
  return await axios.post(
    `http://161.35.189.82:5001/post/comment/${payload.postId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    }
  );
}
function* onCreatePost({ payload }) {
  try {
    const response = yield call(createPost, payload);
    yield put(creatPostSuccess(response.data));
    const posts = yield call(getPosts);
    yield put(getPostsSuccess(posts.data));
  } catch (error) {
    yield put(createPostsFail(error.response));
  }
}

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response.data));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* onCreateComment({ payload }) {
  try {
    const response = yield call(createComment, payload);
    yield put(createCommentSuccess(response));
  } catch (error) {
    yield put(createCommentFailed(error));
  }
}
function* PostSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
  yield takeLatest(CREATE_POST_REQUEST, onCreatePost);
  yield takeLatest(CREATE_COMMENT_REQUEST, onCreateComment);
}

export default PostSaga;
