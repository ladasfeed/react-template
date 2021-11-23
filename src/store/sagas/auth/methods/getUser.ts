import { call, take } from "redux-saga/effects";
import { errorHandlerSaga } from "store/sagas/util/helpers/errorHandlerSaga";
import { PayloadAction } from "@reduxjs/toolkit";
import { processStateController } from "store/sagas/util/helpers/processStateController";
import {sagaActions} from "store/sagas/actions";

export function* getUserSaga(action: PayloadAction<{phone: string}>) {
  const { payload, type: actionType } = action;
  const process = processStateController(actionType);

  try {
    process.start();
    // const response: sagaApiType = yield call(API.apiMethod, payload.phone);
    const hmm:string = yield take(sagaActions.auth.getCode)
    console.log(hmm)
  } catch (e) {
    yield call(errorHandlerSaga, {
      response: e,
    });
  } finally {
    process.stop();
  }
}
