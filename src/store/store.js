import { configureStore } from "@reduxjs/toolkit";

import regionReducer from "../features/counter/RegionSlice";

export const store = configureStore({
  reducer: {
    region: regionReducer,
  },
});
