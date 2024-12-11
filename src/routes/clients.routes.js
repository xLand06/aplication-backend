import { Router } from "express";
import clientsControllers from "../controllers/clients.controller.js";

const router = Router();

router.get("/clients", async (req, res) => {
  const clients = await clientsControllers().getClients();
  res.json(clients);
});

router.get("/clients/:clientId", (req, res) => {
  const { clientId } = req.params;
  const { client, message } = clientsControllers().getClientId(clientId);
  res.json({ client, message });
});

router.post("/clients", (req, res) => {
  const client = req.body;
  let { message } = clientsControllers().postClients(client);
  res.json({ message });
});

router.delete("clients/:id"),
  (req, res) => {
    res.send("Deleted Client");
  };

router.put("client/:id"),
  (req, res) => {
    res.send("Edited Client");
  };

export default router;
