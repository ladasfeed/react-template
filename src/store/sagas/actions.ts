import {createAction} from "@reduxjs/toolkit";

export const sagaActions = {
  auth: {
    getUser: createAction<{phone: string}>("auth/getUser"),
    getCode: createAction<{}>("auth/getCode"),
  }
}
