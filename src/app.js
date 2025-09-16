import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import rideRoutes from "./routes/rideRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rides", rideRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/payments", paymentRoutes);

export default app;   // ✅ must be default export
