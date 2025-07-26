import { addUser, getUser } from "@/lib/actions/actions";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  pages: {
    signOut: "/signout",
    signIn: "/signin",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const authorizedUser = await getUser(credentials!.email);
        return authorizedUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const foundUser = await getUser(token.email!);
      document.cookie = `authToken=${token.accessToken}; path=/`;
      return { ...session, accessToken: token.accessToken, id: foundUser?.id };
    },
    async signIn({ user }) {
      const foundUser = await getUser(user.email!);
      if (!foundUser) await addUser(user.email!);
      return true;
    },
  },
};
