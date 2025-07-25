import type { Metadata, NextApiRequest } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import SessionProvider from "./session-provider";
import TokenValidator from "@/components/token-validator";
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To Do",
  description: "Created by Tcoco4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {/* <TokenValidator /> */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
