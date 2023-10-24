/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decrypt } from "../util/descrypt";
import axios from "axios";
import { encrypt } from "../util/encrypt";
import qs from "qs";

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

export const updateProperty = createAsyncThunk(
  "property/update",
  async ({ id, property }: { id: any; property: any }) => {
    const data = {
      payload: encrypt(property),
    };
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const response = await axios.patch(
      `https://probation.sirkell.com/probation/test/properties/${id}`,
      qs.stringify(data),
      config
    );
    return decrypt(response.data);
  }
);

export const createProperty = createAsyncThunk(
  "property/create",
  async (property: any) => {
    const data = {
      payload: encrypt(property),
    };
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const response = await axios.post(
      `https://probation.sirkell.com/probation/test/properties`,
      qs.stringify(data),
      config
    );
    return decrypt(response.data);
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
    commonAsyncActions(builder, updateProperty);
    commonAsyncActions(builder, createProperty);
  },
});

export default propertySlice.reducer;
