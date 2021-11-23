import { spawn } from "redux-saga/effects";
import { authWatcher } from "store/sagas/auth";
import { clearErrorsSaga } from "store/sagas/util/helpers/clearErrorsSaga";

export function* rootSaga() {
  yield spawn(authWatcher);
  yield spawn(clearErrorsSaga);
}
