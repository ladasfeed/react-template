import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "store/state/reducers/authReducer";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { loadingStateSlice } from "store/state/static/loadingStateReducer";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { rootSaga } from "store/sagas";
import { errorsReducer } from "store/state/static/errorsReducer";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  authReducer: authReducer.reducer,
  loadingState: loadingStateSlice.reducer,
  errorsReducer: errorsReducer.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sagaMiddleware)
      .concat(routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);

export type StateType = ReturnType<typeof reducer>;
