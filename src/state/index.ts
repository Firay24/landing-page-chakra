import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./reducers/property";

const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export default store;
