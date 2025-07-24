import prisma from "../prisma-client/prisma";
import crypto from "crypto";
import { AuthenticatedUser } from "../types";

export async function getUser(
  email: string,
  password: string
): Promise<AuthenticatedUser | null> {
  const salt = process.env["NEXTAUTH_SECRET"] ?? "salty";
  const saltedPassword = password + salt;

  const saltedAndHashedPassword = crypto
    .createHash("sha512")
    .update(saltedPassword)
    .digest("base64");

  const authorizedUser = await prisma.authorizedUser.findFirst({
    where: {
      email: email,
      password: saltedAndHashedPassword,
    },
    select: {
      id: true,
      username: true,
    },
  });

  if (!authorizedUser) return null;

  return {
    name: authorizedUser.username,
    id: authorizedUser.id.toString(),
  };
}
