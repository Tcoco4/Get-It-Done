"use client";

import SearchIcon from "@/components/search-icon";
import { Button, Input, Progress } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Text } from "@/components/text";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const router = useRouter();

  return (
    <div>
      <main>
        <div className="flex items-center justify-center max-h-screen pt-8">
          <h2 className="text-3xl font-bold text-black dark:text-white center">
            To Do
          </h2>
        </div>
        <div className="flex items-center justify-center max-h-screen pt-2">
          <div id="search" className=" flex w-3/5 justify-center items-center ">
            <Input
              isClearable
              placeholder="Search for a Task"
              name="search"
              type="text"
              variant="flat"
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
              }
            />
          </div>
        </div>
        {/* <div className="flex items-center justify-center max-h-screen pt-2">
          <div
            id="list"
            className=" flex w-3/5 justify-center items-center pt-4 "
          >
            <div
              id="progress"
              className="w-full bg-white text-black px-4 py-2 rounded-md border-2 border-black pointer-events-none"
            >
              <div className="w-full flex justify-between">
                <p> My List</p>
                <p> 0/10</p>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <footer className=" flex  flex-wrap items-center justify-center">
        <div id="get-started" className=" pt-4 ">
          <Button
            id="add-list"
            variant="bordered"
            className="w-full bg-black text-white px-4 py-2 rounded-md "
          >
            + New List
          </Button>
        </div>
      </footer>
    </div>
  );
}
