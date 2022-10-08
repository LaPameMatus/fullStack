import axios from "axios";

export const LoginUser = async () => {
  const user = {
    username: "",
    password: "",
  };

  return await axios.post("http://localhost:3000/login", user);
};
