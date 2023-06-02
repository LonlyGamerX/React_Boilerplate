import axios from "axios";

const port = 5333;
const urlendpoint = "http://localhost:" + port;
const loginEP = "/login/login"; // EP = Endpoint
const userEP = "/user/admin";

export const Login = async (email, password) => {
  try {
    const response = await axios.post(
      urlendpoint + loginEP,
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UserCreation = async (email, password, name, admin) => {
  try {
    const response = await axios.post(
      urlendpoint + userEP,
      JSON.stringify({ email, password, name, admin }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
