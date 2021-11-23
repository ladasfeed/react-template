import { call, put } from "redux-saga/effects";
import {sagaApiType} from "store/sagas/util/types";
import {PayloadAction} from "@reduxjs/toolkit";
import {errorHandlerSaga} from "store/sagas/util/helpers/errorHandlerSaga";
import {processStateController} from "store/sagas/util/helpers/processStateController";


export function* getCode(action: PayloadAction<{}>) {
  const { payload, type: actionType } = action;
  const process = processStateController(actionType);
  try {
    process.start();
  } catch (e) {
    yield call(errorHandlerSaga, {
      response: e,
    });
  } finally {
    process.stop();
  }
}