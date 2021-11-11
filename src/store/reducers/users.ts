import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserModel from "models/User";
import UsersStateModel from "models/UsersState";

export const initiateFetchUsers = "USERS/INITIATE_GET_USER";
export const initiateToggleSelectTask = "USERS/INITIATE_TOGGLE_SELECT_TASK";

const initialState = {
  users: [],
  fetchInProgress: false,
  fetchError: null,
} as UsersStateModel;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // ========== FETCH USERS ==========
    fetchUsersRequest(state) {
      state.fetchInProgress = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<UserModel[]>) {
      const data = action.payload;

      state.fetchInProgress = false;
      state.fetchError = null;

      // Add 'selected' field for later use (initially nothing is selected)
      const users = data.map((u) => ({
        ...u,
        tasks: u.tasks.map((t) => ({ ...t, selected: false })),
      }));
      state.users = users;
    },
    fetchUsersError(state, action: PayloadAction<string>) {
      const errorMessage = action.payload;

      state.fetchInProgress = false;
      state.fetchError = errorMessage;
    },
    // ========== TOGGLE TASK SELECTION ==========
    toggleSelectTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const users = [...state.users];

      const user = users.find((u) => u.tasks.find((t) => t.id === id));
      const task = user.tasks.find((t) => t.id === id);
      task.selected = !task.selected;

      state.users = users;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  toggleSelectTask,
} = usersSlice.actions;
export default usersSlice.reducer;
