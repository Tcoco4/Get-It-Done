import { List, Task } from "../types";

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
