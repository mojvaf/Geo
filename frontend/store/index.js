import { configureStore } from "@reduxjs/toolkit";
import adventuresReducer from "./adventuresSlice";
import birdsReducer from "./BirdsSlice";

export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    birds: birdsReducer,
  },
});
