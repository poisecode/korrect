import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from './Constant';
import { getToken } from "./ManageToken";

const PreLoginInstance = axios.create(
  {
    baseURL: API_BASE_URL,
    headers: {
      // 'origin': '',
    }
  }
);
PreLoginInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = getToken();
  return config;
});

PreLoginInstance.interceptors.response.use(undefined, (error) => {
  console.log('error', error);
  if (error.response) {
    toast.error(error.response.data.message || "Something went wrong. Please try again.");
  } else {
    toast.error("Something went wrong. Please try again.");
  }
  return Promise.reject(error);
});

export default PreLoginInstance;
