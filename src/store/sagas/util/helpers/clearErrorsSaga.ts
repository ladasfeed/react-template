import { put, call, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { errorsReducer } from "store/state/static/errorsReducer";

export function* clearErrorsSaga() {
  yield takeEvery(LOCATION_CHANGE, function* () {
    yield put(errorsReducer.actions.setFieldsErrors({}));
    yield put(errorsReducer.actions.setGlobalError(""));
  });
}
