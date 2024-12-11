import { data } from "../database/data.js";

const loginControllers = () => {
  const verifyLogin = (email, password) => {
    let userFound = false;
    let correctPassword = false;

    data.users.map((item) => {
      if (item.email === email) {
        userFound = true;
        if (item.password === password) correctPassword = true;
      }
    });

    if (!userFound) {
      return { message: "This email is not associated with any account" };
    }

    if (!correctPassword) {
      return { message: "Incorrect Password" };
    }

    return { mesage: "You have successfully logged in" };
  };
  return { verifyLogin };
};

export default loginControllers;
