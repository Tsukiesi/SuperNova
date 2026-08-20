import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().int().positive(),
  JWT_SECRET: z.string().nonempty(),
  DATABASE_URL: z.string().nonempty(),
  POSTGRES_USER: z.string().nonempty(),
  POSTGRES_PASSWORD: z.string().nonempty(),
  POSTGRES_DB: z.string().nonempty(),
});
console.log("PORT:", process.env.PORT);
const env = envSchema.parse(process.env);

export default env;
