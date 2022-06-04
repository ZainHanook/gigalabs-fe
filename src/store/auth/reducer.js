import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./authTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: {
    message: "",
  },
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      state = { ...state, loading: true };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
      break;

    case LOGIN_FAILED:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default AuthReducer;
