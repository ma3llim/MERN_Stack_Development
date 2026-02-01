import { z } from "zod";

const envSchema = z.object({
    PORT: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
