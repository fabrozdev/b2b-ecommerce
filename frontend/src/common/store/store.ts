import api from "@/api";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "@/common/store/rootReducer.ts";
import { Reducer } from "redux";

const persistConfig = {
  key: "admin",
  keyPrefix: "",
  storage,
  whitelist: ["auth"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer() as Reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const RootStateSelector = (state: RootState) => state;
