import { z } from "zod";

const envSchema = z.object({
    PORT: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.string(),
    ACCESS_TOKEN_SECRET: z.string(),
    REFRESH_TOKEN_SECRET: z.string(),
    ACCESS_TOKEN_EXPIRY: z.string(),
    REFRESH_TOKEN_EXPIRY: z.string(),
});

export const env = envSchema.parse(process.env);
