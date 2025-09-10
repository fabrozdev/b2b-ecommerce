import { combineReducers, CombinedState, AnyAction, Reducer } from "redux";
import api from "@/api";
import authenticationReducer, {
  AuthenticationState,
} from "@/features/authentication/store/authenticationSlice.ts";

export type RootState = CombinedState<{
  auth: AuthenticationState;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [api.reducerPath]: any;
}>;

export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>;
}

const staticReducers = {
  auth: authenticationReducer,
  [api.reducerPath]: api.reducer,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, action);
  };

export default rootReducer;
