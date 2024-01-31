import axios from "axios";

const fetchApi = axios.create({
  baseURL: "http://localhost:4000/api",
});

fetchApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetchApi;