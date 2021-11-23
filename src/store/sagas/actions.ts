import { createAction } from "@reduxjs/toolkit";
import { AuthApiTypes } from "api/auth/types";

export const sagaActions = {
  auth: {
    getUser: createAction<AuthApiTypes.getUserType>("auth/getUser"),
    getToken: createAction<AuthApiTypes.getToken>("auth/getToken"),
  },
};
