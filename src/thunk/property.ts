/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decrypt } from "../util/descrypt";
import axios from "axios";

export const fetchAllProperty = createAsyncThunk(
  "property/fetchAll",
  async () => {
    const response = await axios.get(
      "https://probation.sirkell.com/probation/test/properties"
    );
    return decrypt(response.data);
  }
);

export const fetchByIdProperty = createAsyncThunk(
  "property/fetchById",
  async (id: any) => {
    const response = await axios.get(
      `https://probation.sirkell.com/probation/test/properties/${id}`
    );
    return decrypt(response.data);
  }
);

export const removePropertyId = createAsyncThunk(
  "property/remove",
  async (id: any) => {
    const isConfirm = window.confirm("Yakin menghapus data?");
    if (isConfirm) {
      const response = await axios.delete(
        `https://probation.sirkell.com/probation/test/properties/${id}`
      );
      return decrypt(response.data);
    }
  }
);

const commonAsyncActions = (builder: any, asyncThunk: any) => {
  builder
    .addCase(asyncThunk.pending, (state: any) => {
      state.status = "loading";
    })
    .addCase(asyncThunk.fulfilled, (state: any, action: any) => {
      state.status = "default";
      state.property = action.payload;
    })
    .addCase(asyncThunk.rejected, (state: any, action: any) => {
      state.status = "default";
      state.error = action.error.message;
    });
};

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
    commonAsyncActions(builder, fetchAllProperty);
    commonAsyncActions(builder, fetchByIdProperty);
    commonAsyncActions(builder, removePropertyId);
  },
});

export default propertySlice.reducer;
