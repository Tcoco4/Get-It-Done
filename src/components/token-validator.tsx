import { signOut } from "next-auth/react";
import jwt from "jsonwebtoken";
import { getToken, JWT } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function TokenValidator(req: NextApiRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (isTokenExpired(token)) signOut({ callbackUrl: "/signin" });
  return null;
}

function isTokenExpired(token: JWT | null): boolean {
  if (!token) return true;
  try {
    const decoded = jwt.decode(JSON.stringify(token)) as { exp?: number };
    if (!decoded?.exp) return true;
    return Date.now() >= decoded.exp * 1000;
  } catch {
    return true;
  }
}
