import { Router } from "express";
import loginControllers from "../controllers/login.controllers.js";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let { message } = loginControllers().verifyLogin(email, password);
  res.json({ message });
});

export default router;
