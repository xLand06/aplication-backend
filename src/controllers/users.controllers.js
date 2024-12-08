import { data } from "../database/data.js";

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

    if (userFound) return { user: user, message: "Usuario encontrado" };
    else return { user: null, message: "usuario no encontrado" };
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

export default usersControllers;
