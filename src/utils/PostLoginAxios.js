import axios from 'axios';
import { getToken, deleteToken } from "./ManageToken";
import { API_BASE_URL } from './Constant';
import { toast } from 'react-toastify';

const PostLoginInstance = axios.create(
  {
    baseURL: API_BASE_URL,  // Url for UAT
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }
);
// SET THE AUTH TOKEN FOR ANY REQUEST
PostLoginInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = getToken();
  return config;
});
// INTERCEPT RESPONSE TO CHECK IF TOKEN HAS EXPIRED AND IF YES THEN REDIRECT TO LOGIN OR HOME
PostLoginInstance.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    deleteToken();
    window.location = "/login";
  } else if (error.response) {
    // console.log('Heyy Errorr', error);
    toast.error(error.response.data.message || "Something went wrong. Please try again.");
  } else {
    // console.log('Heyy Errorr', error);
    toast.error("Something went wrong. Please try again.");
  }
  return Promise.reject(error);
});

export default PostLoginInstance;