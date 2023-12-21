import axios from "axios";
import { getCookie, deleteCookie, setCookie } from "cookies-next";
// import { v4 as uuidv4 } from "uuid";

interface RequestProps {
  method: "get" | "post" | "put" | "delete";
  url?: string;
  data?: any;
  headers?: any;
  [propsName: string]: any;
}
let isRefreshing = false;
let subscribers: Array<any> = [];

function addSubscriber(callback: any) {
  subscribers.push(callback);
}

function onRefreshed(new_token: any) {
  subscribers = subscribers.map((callback) => callback(new_token));
  subscribers = [];
}
const request = axios.create({
  // baseURL: API_URL,
  timeout: 40000,
});

request.interceptors.request.use(
  (config: any) => {
    if (config.url.indexOf("/login") !== -1 || config.url.indexOf("/refresh-token") !== -1) {
      delete config.headers.Authorization;
    }
    return { ...config, headers: { ...config?.headers } };
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response && error?.response?.status === 401) {
      const refreshToken = getCookie("refresh-token");
    }
    return Promise.reject(error.response);
  }
);

const api = (options: RequestProps) => {
  const token = getCookie("token");
  // const uuid = getCookie("uuid");
  let headers = {
    ...options.headers,
    "Accept-Language": "vi",
    "m-platform": "WEB",
    tcode: "cfm",
    // tid: 1000,
  };
  if (token) headers = { ...headers, Authorization: `Bearer ${token}` };
  // if (uuid) {
  //   headers = { ...headers, "m-user-id": uuid };
  // } else {
  //   const newUuid = uuidv4();
  //   setCookie("uuid", newUuid);
  //   headers = { ...headers, "m-user-id": newUuid };
  // }

  return request({
    // baseURL: API_URL,
    responseType: "json",
    ...options,
    headers,
  });
};

export default api;
