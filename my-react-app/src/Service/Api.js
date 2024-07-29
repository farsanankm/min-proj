import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from './Constants/Config';

// Base URL for the API
const API_URL = 'http://localhost:8000';

// Create an instance of axios with default configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json"
  }
});

// Request interceptor to handle request configurations
axiosInstance.interceptors.request.use(
  function(config) {
    // Any additional configurations can be added here
    return config;
  },
  function(error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Function to process the response
const processResponse = (res) => {
  if (res?.status === 200) {
    return { isSuccess: true, data: res.data };
  } else {
    return {
      isFailure: true,
      status: res?.status,
      msg: res?.msg,
      code: res?.code
    };
  }
};

// Function to process errors
const processError = (error) => {
  if (error.response) {
    // Error received from server
    console.log('Error in response:', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status
    };
  } else if (error.request) {
    // Request made but no response received
    console.log('Error in request:', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: ""
    };
  } else {
    // Other errors
    console.log('Error in network:', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: ""
    };
  }
};

// Response interceptor to handle responses
axiosInstance.interceptors.response.use(
  function(res) {
    return processResponse(res);
  },
  function(error) {
    return Promise.reject(processError(error));
  }
);

// API object to hold various API calls
const API = {};

// Loop through SERVICE_URLS and create API methods
for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    return axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function(progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function(progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          showDownloadProgress(percentageCompleted);
        }
      }
    });
  };
}

export { API };
