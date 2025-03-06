import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: "5mb" }));

app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.use("/api/auth", authRoutes);

app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
  connectDB();
});
