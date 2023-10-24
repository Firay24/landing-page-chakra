/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUser = createAsyncThunk(
  "users/fetchAll",
  async (limit: any) => {
    console.log(limit.currentPage);
    console.log(limit.currentLimit);
    const response = await axios.get(
      `https://reqres.in/api/users?page=${limit.currentPage}&per_page=${limit.currentLimit}`
    );
    return response.data;
  }
);

const commonAsyncActions = (builder: any, asyncThunk: any) => {
  builder
    .addCase(asyncThunk.pending, (state: any) => {
      state.status = "loading";
    })
    .addCase(asyncThunk.fulfilled, (state: any, action: any) => {
      state.status = "default";
      state.users = action.payload;
    })
    .addCase(asyncThunk.rejected, (state: any, action: any) => {
      state.status = "default";
      state.error = action.error.message;
    });
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    status: "uninitialized",
    users: [],
    payload: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    commonAsyncActions(builder, fetchAllUser);
  },
});

export default userSlice.reducer;
