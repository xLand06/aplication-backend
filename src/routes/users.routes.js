import { Router } from "express";
import { userController } from "../controllers/users.controllers.js";

/* router.get("/users", async (req, res) => {
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

//router.post("/users", usersControllers().postUsers);

router.delete("users/:id"),
  (req, res) => {
    res.send("Eliminated user");
  };

router.put("users/:id"),
  (req, res) => {
    res.send("Edited user");
  };
*/

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
