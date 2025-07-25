"use client";
import SearchIcon from "@/components/search-icon";
import { Button, Input } from "@heroui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { List } from "@/lib/types";

export default function Dashboard() {
  const router = useRouter();
  const myList: List[] = [
    { name: "BE Bugs", total: 10, completed: 5 },
    { name: "FE Bugs", total: 10, completed: 8 },
    { name: "Get Started", total: 9, completed: 7 },
  ]; //temporary
  return (
    <div>
      <main className="w-full min-h-screen p-6 ">
        <div id="title" className="flex items-center justify-center pt-8">
          <h2 className="text-3xl font-bold text-black dark:text-white center">
            To Do
          </h2>
        </div>
        <div id="search" className="flex items-center justify-center pt-2">
          <div className=" flex w-3/5 ">
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
        <div id="my-list" className="flex items-center justify-center pt-2 ">
          <div className=" flex w-3/5  items-center justify-center  ">
            <ul className="w-full space-y-2">
              {myList.map((list, index) => (
                <Button
                  key={index}
                  variant="bordered"
                  className="w-full bg-white flex  rounded-md border-gray-200 hover:border-black justify-between "
                >
                  <p>{list.name}</p>
                  <p>
                    {list.completed}/{list.total}
                  </p>
                </Button>
              ))}
            </ul>
          </div>
        </div>
        <div id="add-list" className="flex items-center justify-center">
          <div className=" pt-4 ">
            <Button
              variant="bordered"
              className="w-full bg-black text-white px-4 py-2 rounded-md "
              onPress={() => router.push("/task")}
            >
              + New List
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center pt-25">
          <div className=" w-3/5 flex justify-start">
            <Button
              color="primary"
              type="submit"
              variant="solid"
              className="bg-black text-white px-4 py-2 rounded-md "
              onPress={async () => signOut({ callbackUrl: "/signin" })}
            >
              SignOut
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
