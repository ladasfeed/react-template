import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "store/state/index";

export const errorsReducer = createSlice({
  name: "errorsReducer",
  initialState: {
    fieldsErrors: {},
    globalError: "",
  } as {
    fieldsErrors: {
      [key: string]: string;
    };
    globalError: string;
  },
  reducers: {
    setFieldsErrors: (state, { payload }: PayloadAction<any>) => {
      state.fieldsErrors = payload;
    },
    setGlobalError: (state, { payload }: PayloadAction<string>) => {
      state.globalError = payload;
    },
    removeFieldError: (state, { payload }: PayloadAction<string>) => {
      const oldErrors = { ...state.fieldsErrors };
      delete oldErrors[payload];
      state.fieldsErrors = oldErrors;
    },
  },
});

export const errorsSelectors = {
  fieldsErrors: (state: StateType) => state.errorsReducer.fieldsErrors,
  globalError: (state: StateType) => state.errorsReducer.globalError,
};
