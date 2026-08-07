import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const corsAllowed = 5173;
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
