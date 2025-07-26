import { signOut } from "next-auth/react";
import jwt from "jsonwebtoken";
import { getToken, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function TokenValidator() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("authToken")?.value;

  if (isTokenExpired(token as string)) signOut({ callbackUrl: "/signin" });
  return null;
}

function isTokenExpired(token: string | null): boolean {
  if (!token) return true;
  try {
    const decoded = jwt.decode(JSON.stringify(token)) as { exp?: number };
    if (!decoded?.exp) return true;
    return Date.now() >= decoded.exp * 1000;
  } catch {
    return true;
  }
}
