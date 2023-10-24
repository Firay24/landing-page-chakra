import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decrypt } from "../util/descrypt";
import axios from "axios";

export const fetchAllProperty = createAsyncThunk(
  "property/fetchData",
  async () => {
    const response = await axios.get(
      "https://probation.sirkell.com/probation/test/properties"
    );
    return decrypt(response.data);
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    status: "uninitialized",
    property: [],
    payload: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProperty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProperty.fulfilled, (state, action) => {
        (state.status = "default"), (state.property = action.payload);
      })
      .addCase(fetchAllProperty.rejected, (state, action) => {
        (state.status = "default"), (state.error = action.error.message);
      });
  },
});

export default propertySlice.reducer;
