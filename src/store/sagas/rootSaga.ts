import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  initiateFetchUsers,
  initiateToggleSelectTask,
} from "store/reducers/users";
import { handleGetUsers, handleToggleSelectTask } from "store/sagas/users";

export function* watcherSaga() {
  yield takeLatest(initiateFetchUsers, handleGetUsers);
  yield takeEvery(initiateToggleSelectTask, handleToggleSelectTask);
}
