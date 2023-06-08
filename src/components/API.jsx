import axios from "axios";

const port = 5333;
const urlendpoint = "http://localhost:" + port;
const aboutEP = "/about";
const loginEP = "/login/login"; // EP = Endpoint
const userEP = "/user/admin";

makeRequest = async (endpoint) => {
  try {
    const response = await axios.get(urlendpoint + endpoint);
    return response.data;
  } catch (error) {
    console.log("Error >>> ", error);
    return null;
  }
};

export const GetAbout = async () => {
  return await makeRequest(aboutEP);
};

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
  }<Container className="bg-danger">
</Container>
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
