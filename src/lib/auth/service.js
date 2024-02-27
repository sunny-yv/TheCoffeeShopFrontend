import axiosInstance from "../axios";
import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN_KEY } from "./constant";

const getUser = () => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/Auth/Login", {
      email,
      password,
    });
    const decoded = jwtDecode(data);
    localStorage.setItem(AUTH_TOKEN_KEY, data);
    return decoded;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};



export const authService = {
  login,
  logout,
  getUser,
};

