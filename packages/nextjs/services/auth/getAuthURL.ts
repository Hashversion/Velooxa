import { env } from "@/env/client";

export const getAuthUrl = () => {
  const clientId = env.NEXT_PUBLIC_DIMO_CLIENT_ID;
  const redirectUri = env.NEXT_PUBLIC_DIMO_DOMIN;
  const scope = "openid email";
  const responseType = "code";

  return `https://auth.dimo.zone/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
};
