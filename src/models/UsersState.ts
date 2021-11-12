import UserModel from "models/User";

type UsersState = {
  users: UserModel[];
  fetchError: string;
  fetchInProgress: boolean;
  selectedTasks: string[];
};

export default UsersState;
