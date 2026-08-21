import express from "express";
import prisma from "../lib/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../env.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

const JWT_SECRET = env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env file");
}

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unknown error");
    res.sendStatus(503);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unknown error");
    res.sendStatus(503);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    res.json(user);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unknown error");
    res.sendStatus(503);
  }
});

export default router;
