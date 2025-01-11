import express from "express";
// import { PORT } from "./config.js";
import userRouter from "./routes/users.routes.js";
// import loginRoutes from "./routes/login.routes.js";
// import clientRoutes from "./routes/clients.routes.js";
// import paymentRoutes from "./routes/payments.routes.js";
import "dotenv/config";

// CREACION DE MODULOS, USERS, LOGIN, PAYMENTS, CLIENTS
// app.use(express.json());
//app.use(userRoutes);
//app.use(loginRoutes);
//app.use(clientRoutes);
//app.use(paymentRoutes);

//app.listen(PORT);
//console.log("Server Run Port", PORT);

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 3250;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
