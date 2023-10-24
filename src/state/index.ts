import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./reducers/property";
import authReducer from "./reducers/auth";

const store = configureStore({
  reducer: {
    property: propertyReducer,
    auth: authReducer,
  },
});

export default store;
