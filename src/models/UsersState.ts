import UserModel from "models/User";

type UsersState = {
  users: UserModel[];
  fetchError: string;
  fetchInProgress: boolean;
};

export default UsersState;
