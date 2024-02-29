import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
});

axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

const fetchApi = setupCache(axiosInstance);
export default fetchApi;