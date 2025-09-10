import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/common/store/store.ts";

export interface AuthenticationState {
  authenticated: boolean;
  sessionToken?: string;
  username?: string;
  email?: string;
  _id?: string;
}

const initialState: AuthenticationState = {
  authenticated: false,
  sessionToken: undefined,
  username: undefined,
  email: undefined,
  _id: undefined,
};

export type LoginSuccesfulActionPayload = {
  sessionToken: string;
  username: string;
  email: string;
  _id: string;
};

export type LoginFailureActionPayload = {
  isError: boolean;
};

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccessfulAction: (
      state,
      payload: PayloadAction<LoginSuccesfulActionPayload>,
    ) => {
      return {
        ...state,
        authenticated: true,
      };
    },
    loginFailureAction: (
      state,
      action: PayloadAction<LoginFailureActionPayload>,
    ) => {
      return {
        ...state,
        isError: action.payload.isError,
      };
    },
    logoutSuccessfulAction: () => {
      return {
        ...initialState,
        authenticated: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const authenticationActions = authenticationSlice.actions;

export const AuthenticationSelector = (state: RootState) => state.auth;

export default authenticationSlice.reducer;
