import { put } from "redux-saga/effects";
import { errorsReducer } from "store/state/static/errorsReducer";

export function* errorHandlerSaga({ response }: { response: any }) {
  console.log(response);
  console.log(response?.data?.data?.errors);
  if (response.status == 500) {
    alert("error");
  }
  if (response.status == 400 || response.status == 401) {
    alert("error");
  } else {
    yield put(
      errorsReducer.actions.setGlobalError(
        response?.data?.data?.errors[0]?.message
      )
    );
  }
}
