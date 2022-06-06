import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = "http://161.35.189.82:5001";

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}
export async function post(url, data) {
  const { email, password } = data.payload;
  return await axiosApi
    .post(url, {
      email,
      password,
    })
    .then((response) => response.data);
}
