export interface AuthenticatedUser {
  id: string;
  name?: string;
  email?: string;
}
export interface List {
  id: number;
  name: string;
  total: number;
  completed: number;
  tasks?: Task[];
}

export type Task = {
  id: number;
  name: string;
  complete: boolean;
  taskDue?: string | null;
  additionalInformation?: string;
};

export const newList: List = {
  id: 999,
  name: "New List ",
  total: 0,
  completed: 0,
};
