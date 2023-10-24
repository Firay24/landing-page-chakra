import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property";

const store = configureStore({
  reducer: {
    property: propertySlice,
  },
});

export default store;
