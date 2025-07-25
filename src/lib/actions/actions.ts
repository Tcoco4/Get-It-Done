import { AuthenticatedUser, List, Task } from "../types";
import prisma from "../prisma-client/prisma";
import crypto from "crypto";

//Lists
export const getAllLists = async (id: number) => {
  return [{ title: "", total: 0, completed: 0, tasks: [] }] as unknown as List;
};

export const createList = async () => {};

export const getList = async (id: number) => {};

export const updateList = async (id: number) => {};

export const deleteList = async (id: number) => {};

//Tasks
export const addTask = async (task: Task, listId: number) => {};
export const getTask = async (id: number) => {};
export const deleteTask = async (taskId: number, listId: number) => {};
export const updateTask = async (id: number) => {};

//User

export const addUser = async (email: string) => {};

export const getUser = async (
  email: string,
  password: string
): Promise<AuthenticatedUser | null> => {
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
      email: true,
    },
  });

  if (!authorizedUser) return null;

  return {
    name: authorizedUser.email,
    id: authorizedUser.id.toString(),
  };
};
