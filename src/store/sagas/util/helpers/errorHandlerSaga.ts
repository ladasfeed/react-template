import { put } from "redux-saga/effects";
import { errorsReducer } from "store/state/static/errorsReducer";
import { errorMapper, getFirstErrorFromResponse } from "helpers/errorMapper";

export function* errorHandlerSaga({ response }: { response: any }) {
  console.log(response);
  console.log(response?.data?.data?.errors);
  if (response.status == 500) return;
  if (response.status == 400 || response.status == 401) {
    yield put(errorsReducer.actions.setFieldsErrors(errorMapper(response)));
    yield put(
      errorsReducer.actions.setGlobalError(getFirstErrorFromResponse(response))
    );
  } else {
    yield put(
      errorsReducer.actions.setGlobalError(
        response?.data?.data?.errors[0]?.message
      )
    );
  }
}
