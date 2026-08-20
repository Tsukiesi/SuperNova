import jwt from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";
import env from "../env.js";
import z from "zod";

const jwtSchema = z.object({
  userId: z.string(),
});

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader)
    return res.status(401).json({ message: "Token not provided" });
  const [type, token] = authorizationHeader?.split(" ");
  if (type !== "Bearer" || !token)
    return res.status(401).json({ message: "Invalid auth headers" });
  jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token not valid" });
    const result = jwtSchema.safeParse(decoded);
    if (!result.success)
      return res.status(401).json({ message: "Invalid token payload" });
    req.userId = result.data.userId;
    next();
  });
}

export default authMiddleware;
