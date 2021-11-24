import { call, take, put } from "redux-saga/effects";
import { errorHandlerSaga } from "store/sagas/util/helpers/errorHandlerSaga";
import { PayloadAction } from "@reduxjs/toolkit";
import { processStateController } from "store/sagas/util/helpers/processStateController";
import { sagaActions } from "store/sagas/actions";
import { sagaApiType } from "store/sagas/util/types";
import { API } from "api";
import { AuthApiTypes } from "api/auth/types";
import { redirect } from "store/sagas/util/helpers/redirect";
import { routes } from "routes";
import { authReducer } from "store/state/reducers/authReducer";

export function* authSaga(action: PayloadAction<AuthApiTypes.getUserType>) {
  const { payload, type: actionType } = action;
  const process = processStateController(actionType);

  try {
    process.start();
    const response: sagaApiType = yield call(API.authApi.getUser, {
      phone: payload.phone,
    });

    /* get user */
    const user = response.data.data[0];
    yield put(authReducer.actions.setUserId(user.id));

    if (user) {
      yield redirect(routes.auth.password);

      while (1) {
        try {
          /* waiting for password */
          const getTokenAction: PayloadAction<AuthApiTypes.getToken> = yield take(
            sagaActions.auth.getToken
          );
          /* get token */
          const getTokenResponse: sagaApiType = yield call(
            API.authApi.token,
            getTokenAction.payload
          );
          if (getTokenResponse.status == 200) {
            yield redirect(routes.cabinet.root);
            break;
          }
        } catch (e) {
          yield call(errorHandlerSaga, {
            response: e,
          });
        }
      }
    }
  } catch (e) {
    yield call(errorHandlerSaga, {
      response: e,
    });
  } finally {
    process.stop();
  }
}
