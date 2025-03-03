import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DIMO_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_DIMO_DOMIN: z.string(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_DIMO_CLIENT_ID: process.env.NEXT_PUBLIC_DIMO_CLIENT_ID,
    NEXT_PUBLIC_DIMO_DOMIN: process.env.NEXT_PUBLIC_DIMO_DOMAIN,
  },
});
