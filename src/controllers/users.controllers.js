/*import { data } from "../database/data.js";

const usersControllers = () => {
  const getUsers = () => {
    let users = [];

    data.users.map((item) => {
      console.log(item);
      const { firstName, lastName, userId, email, phone, role, status } = item;
      users = users.concat({
        firstName,
        lastName,
        userId,
        email,
        phone,
        role,
        status,
      });
    });

    console.log(users);
    return users;
  };

  const getUserId = (userId2) => {
    let user = {};
    let userFound = false;

    data.users.forEach((u) => {
      if (u.userId === userId2) {
        const { firstName, lastName, userId, email, phone, role, status } = u;
        user = { firstName, lastName, userId, email, phone, role, status };
        userFound = true;
      }
    });

    if (userFound) return { user: user, message: "User found" };
    else return { user: null, message: "usuario not found" };
  };

  const postUsers = (user) => {
    let userFound = false;

    data.users.map((item) => {
      if (item.userId === user.userId) userFound = true;
    });

    if (!userFound) {
      data.users.push(user);
      return { message: "User has been aggregated sucessfully" };
    } else {
      return { message: "User already exist" };
    }
  };

  return { getUsers, postUsers, getUserId };
};

export default usersControllers;*/

import { userModel } from "../models/user.model.js";

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, username, password } = req.body;

    return res.json({
      ok: true,
      msg: "user ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error en el server",
    });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error en el server",
    });
  }
};

export const userController = {
  register,
  login,
};
