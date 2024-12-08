import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import clientRoutes from "./routes/clients.routes.js";
import paymentRoutes from "./routes/payments.routes.js";

// CREACION DE MODULOS, USERS, LOGIN, PAYMENTS, CLIENTS

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);
app.use(clientRoutes);
app.use(paymentRoutes);

app.listen(PORT);
console.log("Server Run Port", PORT);
