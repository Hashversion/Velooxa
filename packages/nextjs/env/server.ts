import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DIMO_CLIENT_ID: z.string(),
    DIMO_DOMAIN: z.string().url(),
    DIMO_PRIVATE_KEY: z.string(),
    DIMO_CODE_EXCHANGE_ENDPOINT: z.string().url(),
  },
  experimental__runtimeEnv: process.env,
});
