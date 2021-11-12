import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserModel from "models/User";
import UsersStateModel from "models/UsersState";

export const initiateFetchUsers = "USERS/INITIATE_GET_USER";
export const initiateToggleSelectTask = "USERS/INITIATE_TOGGLE_SELECT_TASK";

const initialState = {
  users: [],
  fetchInProgress: false,
  fetchError: null,
  selectedTasks: [],
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
      state.users = data;
    },
    fetchUsersError(state, action: PayloadAction<string>) {
      const errorMessage = action.payload;

      state.fetchInProgress = false;
      state.fetchError = errorMessage;
    },
    // ========== TOGGLE TASK SELECTION ==========
    toggleSelectTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const alreadySelected = state.selectedTasks.find(
        (selectedTaskId: string) => selectedTaskId === id
      );

      if (alreadySelected) {
        state.selectedTasks = state.selectedTasks.filter(
          (selectedTaskId: string) => selectedTaskId !== id
        );
      } else {
        state.selectedTasks = [...state.selectedTasks, id];
      }
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
