import { takeEvery, take, call } from "redux-saga/effects";
import { sagaActions } from "store/sagas/actions";
import { authSaga } from "store/sagas/auth/methods/authSaga";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthApiTypes } from "api/auth/types";

export function* authWatcher() {
  while (true) {
    const action: PayloadAction<AuthApiTypes.getUserType> = yield take(
      sagaActions.auth.getUser
    );
    yield call(authSaga, action);
  }
}
