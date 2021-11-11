import { call, put } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  toggleSelectTask,
} from "store/reducers/users";
import api from "api";

export function* handleGetUsers() {
  try {
    yield put(fetchUsersRequest());
    const { data } = yield call(api.users.getUsers);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersError("An error occured while fetching users."));
  }
}

export function* handleToggleSelectTask(action: {
  type: string;
  payload: { id: string };
}) {
  const {
    payload: { id },
  } = action;
  yield put(toggleSelectTask(id));
}
