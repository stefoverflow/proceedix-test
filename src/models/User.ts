import Task from "models/Task";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  tasks: Task[];
};

export default User;
