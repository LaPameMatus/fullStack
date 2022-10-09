import axios from "axios";

export const LoginUser = async () => {
  const user = {
    username: "",
    password: "",
  };

  return await axios.post("http://localhost:3000/login", user);
};

export const RegisterUser = async () => {
  const user = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  return await axios.post("http://localhost:3000/register", user);
};
