import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property";
import authSlice from "./auth";
import userSlice from "./users";

const store = configureStore({
  reducer: {
    property: propertySlice,
    auth: authSlice,
    users: userSlice,
  },
});

export default store;
