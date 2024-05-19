import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/Auth/register";

const LOGIN_BASE_REST_API_URL = "http://localhost:8080/Auth/login";

export const login = (usernameOrEmail, password) =>
  axios.post(LOGIN_BASE_REST_API_URL, { usernameOrEmail, password });

export const register = (reg) => axios.post(ACCOUNT_BASE_REST_API_URL, reg);