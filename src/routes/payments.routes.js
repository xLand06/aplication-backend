import { Router } from "express";
import paymentsControllers from "../controllers/payments.controller.js";

const router = Router();

router.get("/payments", async (req, res) => {
  const payments = await paymentsControllers().getPayments();
  res.json(payments);
});

router.get("/payments/:id", (req, res) => {
  const { id } = req.params;
  const { payment, messsage } = paymentsControllers().getid(id);
  res.json({ payment, messsage });
});

router.post("/payments", (req, res) => {
  const payment = req.body;
  let { message } = paymentsControllers().postPayments(payment);
  res.json({ message });
});

router.delete("payment/:id"),
  (req, res) => {
    res.send("eliminated payment");
  };

router.put("payment./:id"),
  (req, res) => {
    res.send("edited payment");
  };

export default router;
