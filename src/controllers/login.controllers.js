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
      return { message: "Este correo no esta vinculado a ningun usuario" };
    }

    if (!correctPassword) {
      return { message: "la contraseña no es correcta" };
    }

    return { message: "Inició sesión correctamente" };
  };
  return { verifyLogin };
};

export default loginControllers;
