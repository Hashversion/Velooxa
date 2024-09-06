import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env/server";
import axios from "axios";

/**
 *
 * curl --location 'https://auth.dimo.zone/token' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'client_id=0xE48e86E73Bd3d86ED7cd33fcC6C03Fc04cb9da8f' --data-urlencode 'grant_type=authorization_code' --data-urlencode 'code=e457nyopqw4dzobzahwvrkxzr' --data-urlencode 'redirect_uri=https://dev.velooxa.com/api/auth/dimo/'
 */

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryCode = searchParams.get("code");

  const res = await axios.post(
    "https://auth.dimo.zone/token",
    {
      client_id: env.DIMO_CLIENT_ID,
      grant_type: "authorization_code",
      code: queryCode,
      redirect_uri: env.DIMO_DOMAIN,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return NextResponse.json({ data: res.data });
}
