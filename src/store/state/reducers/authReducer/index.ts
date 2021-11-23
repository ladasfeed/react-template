import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "api/auth/methods";

const initialState: {
  userId: string | null;
} = {
  userId: null,
};

export const authReducer = createSlice({
  name: "@authReducer",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      authApi.user_id = action.payload;
    },
  },
});

export const authSelectors = {};
