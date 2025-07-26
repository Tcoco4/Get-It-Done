export interface AuthenticatedUser {
  id: string;
  name?: string;
  email?: string;
}
export interface List {
  name: string;
  total: number;
  completed: number;
  tasks?: Task[];
}

export type Task = {
  name: string;
  complete: boolean;
  taskDue?: string | null;
  additionalInformation?: string;
};

export const newList: List = {
  name: "New List",
  total: 0,
  completed: 0,
};
