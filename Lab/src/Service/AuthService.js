import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/Auth/register";

const LOGIN_BASE_REST_API_URL = "http://localhost:8080/Auth/login";

export const login = (usernameOrEmail, password) =>
  axios.post(LOGIN_BASE_REST_API_URL, { usernameOrEmail, password });

export const register = (reg) => axios.post(ACCOUNT_BASE_REST_API_URL, reg);

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedUser = (username) =>
  sessionStorage.setItem("authenticatedUser", username);

//! check if user is logged in

export const isUserLoggedIn = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  if (username == null) {
    return false;
  } else {
    return true;
  }
};

//Get logged in user

export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

//! logout the user

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};


