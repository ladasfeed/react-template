import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sagaActions } from "store/sagas/actions";

const initialState: {
  [key: string]: boolean;
} = (function () {
  let temp: any = {};
  let groupKey: keyof typeof sagaActions;
  for (groupKey in sagaActions) {
    const group = sagaActions[groupKey];
    let actionKey: keyof typeof group;
    // @ts-ignore
    for (actionKey in group) {
      // @ts-ignore
      temp[`${group[actionKey].type}`] = false;
    }
  }
  return temp;
})();

export const loadingStateSlice = createSlice({
  name: "@loadingStateSlice",
  initialState,
  reducers: {
    set: (
      state,
      {
        payload,
      }: PayloadAction<{
        key: string;
        value: boolean;
      }>
    ) => {
      state[payload.key] = payload.value;
    },
    clear: () => {},
  },
});

export const processLoading = {
  get: (key: string) => (state: any) => {
    return state.loadingState[key];
  },
};

export const setProcessLoading = (key: string, value: boolean) => {
  return loadingStateSlice.actions.set({
    key,
    value,
  });
};
