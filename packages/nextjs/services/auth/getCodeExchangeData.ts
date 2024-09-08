import { env } from "@/env/server";

export default function getCodeExchangeData(code: string) {
  const data = {
    client_id: env.DIMO_CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: env.DIMO_DOMAIN,
  };

  return data;
}
