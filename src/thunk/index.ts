import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    property: propertySlice,
    auth: authSlice,
  },
});

export default store;
