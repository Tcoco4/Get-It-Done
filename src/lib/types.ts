export interface AuthenticatedUser {
  id: string;
  name?: string;
  email?: string;
  image?: any;
}
export interface List {
  title: string;
  total: number;
  completed: number;
}

export interface Task {
  name: string;
  description: string;
  due: Date;
  status: Status;
}

export enum Status {
  ToDO = "toDo",
  Started = "started",
  Completed = "completed",
}
