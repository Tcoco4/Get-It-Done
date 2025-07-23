import Image from "next/image";
import SignIn from "./auth/signIn/page";

export default function Home() {
  return (
    <div>
      <main>
        <SignIn />
      </main>
    </div>
  );
}
