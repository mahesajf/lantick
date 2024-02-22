import axios from "axios";

// Create Base URL
const baseURL = import.meta.env.VITE_BASE_URL;
export const API = axios.create({
  baseURL: 'http://35.213.168.149:5000/api/v1'
});

// Authorization Token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
