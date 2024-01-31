import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./";

const rootReducer = combineReducers({
  product: productSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export type RootState = ReturnType<typeof rootReducer>;