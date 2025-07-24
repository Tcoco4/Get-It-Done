"use client";

import { Button, Divider } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  console.log(status);
  if (status === "loading") return <p>Loading...</p>;
  return (
    <div className="flex items-center justify-between min-h-screen">
      <h2>This is Dashboard</h2>
      <div>
        {/* <Button
          color="primary"
          type="submit"
          variant="solid"
          onClick={async () => signOut({ callbackUrl: "/signin" })}
        >
          SignOut
        </Button> */}
      </div>
    </div>
  );
}
