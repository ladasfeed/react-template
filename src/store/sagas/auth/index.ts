import { takeEvery, take } from "redux-saga/effects";
import { sagaActions } from "store/sagas/actions";
import { getUserSaga } from "store/sagas/auth/methods/getUser";

export function* authWatcher() {
  yield take(sagaActions.auth.getUser);
  // call saga
}
