"use server";
import { AuthenticatedUser, List, Task } from "../types";
import prisma from "../prisma-client/prisma";

//Lists
export const getAllLists = async (id: number): Promise<List[]> => {
  return await prisma.list.findMany({
    where: { userId: id, auditStatus: "active" },
  });
};

export const createList = async (
  list: List,
  userId: number
): Promise<number> => {
  const newList = await prisma.list.create({
    data: {
      name: list.name,
      total: list.total,
      completed: list.completed,
      tasks: {
        create: [],
      },
      auditStatus: "active",
      userId: userId,
    },
    select: { id: true },
  });
  return newList.id;
};

export const getList = async (id: number): Promise<List | null> => {
  const list = await prisma.list.findFirst({
    where: { id: id },
    include: {
      tasks: {
        where: { auditStatus: "active" },
      },
    },
  });
  return list;
};

export const deleteList = async (id: number): Promise<boolean | Error> => {
  const list = await prisma.list
    .update({
      where: { id: id },
      data: { auditStatus: "deleted" },
      select: { auditStatus: true },
    })
    .catch((err: any) => console.error(err));

  if (!list) throw new Error(" id does not exist");
  return list.auditStatus == "deleted" ? true : false;
};
export const updateListName = async (
  id: number,
  name: string
): Promise<boolean> => {
  const updatedListName = await prisma.list.update({
    where: { id: id },
    data: { name: name },
  });
  return updatedListName.name == name ? true : false;
};
//Tasks
export const addTask = async (task: Task, listId: number): Promise<number> => {
  const newTask = await prisma.task.create({
    data: {
      name: task.name,
      complete: task.complete,
      taskDue: task.taskDue,
      additional: task.additionalInformation,
      auditStatus: "active",
      list: {
        connect: { id: listId },
      },
    },
  });
  await prisma.list.update({
    where: { id: listId },
    data: {
      total: {
        increment: 1,
      },
    },
  });
  return newTask.id;
};
export const getTask = async (id: number): Promise<Task> => {
  const task = await prisma.task.findFirst({
    where: { id: id, auditStatus: "active" },
  });
  if (!task) throw new Error(" id does not exist");
  return task;
};
export const deleteTask = async (
  taskId: number,
  listId: number
): Promise<boolean> => {
  const task = await prisma.task.update({
    where: { id: taskId, listId: listId },
    data: { auditStatus: "deleted" },
    select: { auditStatus: true, complete: true },
  });

  await prisma.list.update({
    where: { id: listId },
    data: {
      ...(task.complete === true && { completed: { decrement: 1 } }),
      total: { decrement: 1 },
    },
  });

  return task.auditStatus == "deleted" ? true : false;
};
export const updateTaskStatus = async (
  id: number,
  status: boolean
): Promise<boolean> => {
  const updatedTaskStatus = await prisma.task.update({
    where: { id: id },
    data: { complete: status },
  });

  await prisma.list.update({
    where: { id: updatedTaskStatus.listId },
    data: { completed: status == true ? { increment: 1 } : { decrement: 1 } },
  });

  return updatedTaskStatus.complete == status ? true : false;
};
export const updateTaskTitle = async (
  id: number,
  title: string
): Promise<boolean> => {
  const updatedTaskName = await prisma.task.update({
    where: { id: id },
    data: { name: title },
  });
  return updatedTaskName.name == title ? true : false;
};

//User

export const addUser = async (email: string): Promise<boolean> => {
  const user = await prisma.user.create({
    data: {
      email: email,
      list: {
        create: [],
      },
    },
  });
  return user ? true : false;
};

export const getUser = async (
  email: string
): Promise<AuthenticatedUser | null> => {
  const authorizedUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
    },
  });

  if (!authorizedUser) return null;
  return {
    email: authorizedUser.email,
    id: authorizedUser.id.toString(),
  };
};
