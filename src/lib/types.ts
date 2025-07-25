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
  tasks?: Task[];
}

export type Task = {
  name: string;
  complete: boolean;
  taskDue?: Date | string;
  additionalInformation?: string;
};
