import Image from "next/image";
import SignIn from "./auth/signIn/page";
import { HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <div>
      {/* <HeroUIProvider> */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SignIn />
      </main>
      {/* </HeroUIProvider> */}
    </div>
  );
}
