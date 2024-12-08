import { Router } from "express";
import usersControllers from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", async (req, res) => {
  const users = await usersControllers().getUsers();
  res.json(users);
});

router.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { user, message } = usersControllers().getUserId(userId);
  res.json({ user, message });
});

router.post("/users", (req, res) => {
  const user = req.body;
  let { message } = usersControllers().postUsers(user);
  res.json({ message });
});

router.delete("users./:id"),
  (req, res) => {
    res.send("Eliminando Usuario");
  };

router.put("users/:id"),
  (req, res) => {
    res.send("Editando Usuarios");
  };

export default router;
