import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const corsAllowed = 5173;
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: `http://localhost:${corsAllowed}`,
  }),
);

app.use(express.json());

app.get("/api/status", (_, res) => {
  res.json({
    status: "ok",
    message: "API is running",
  });
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
