import axios from "axios";

export const LoginUser = async () => {
  const user = {
    username: "martin@gmail.com",
    password: "asd123",
  };

  return await axios.post("http://localhost:3000/login", user);
};
