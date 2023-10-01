import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  language: languageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["language"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST", "persist/PURGE"],
    },
  }),
});

export const persistor = persistStore(store);