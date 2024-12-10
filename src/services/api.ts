import { endpoint } from "@/constants/endpoint";
import { API_CODE, API_MESSAGE_KEY } from "@/enums/api.enum";
import axios from "axios";
import { get } from "lodash";

const api = axios.create({
  baseURL: `${endpoint.base}/api/v1`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (axios.isAxiosError(error)) {
      const statusCode = get(error, "response.status");
      const message = String(get(error, "response.data.message"));

      if (
        statusCode === API_CODE.UNAUTHORIZED ||
        (statusCode === API_CODE.FORBIDDEN &&
          message.includes(API_MESSAGE_KEY.TOKEN_INVALID))
      ) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login";
      }
      return Promise.reject(new Error(message));
    }
  }
);

export default api;
