import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_URL;

export const createUser = async (userValues) => {
  try {
    const res = await axios.post(
      `http://caffe-dell-anima-back.vercel.app/users/register-user`,
      userValues
    );
    const token = res.data.token;
    sessionStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (userData) => {
  try {
    const res = await axios.post(
      `http://caffe-dell-anima-back.vercel.app/users/login`,
      userData
    );
    const { token, name } = res.data;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("token", token);
    return { token, name };
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    throw error;
  }
};

export const userLogout = async (userData) => {
  try {
    const res = await axios.post(`${URL}/users/logout`, userData);
    const { token, name } = res.data;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("name", name);
  } catch (error) {
    console.log(error);
  }
};
