/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCEEDED,
  FETCH_PROPERTY_FAILED,
  FETCH_PROPERTY_BYID_SUCCEEDED,
  ADD_PROPERTY,
  UPDATE_PROPERTY,
} from "../constant/property";
import { Dispatch } from "redux";
import { decrypt } from "../../util/descrypt";
import { encrypt } from "../../util/encrypt";
import qs from "qs";

export const fetchPropertyStarted = () => ({
  type: FETCH_PROPERTY_START,
});

export const fetchPropertySucceeded = (property: any) => ({
  type: FETCH_PROPERTY_SUCCEEDED,
  property,
});

export const fetchPropertyFailed = (error: any) => ({
  type: FETCH_PROPERTY_FAILED,
  error,
});

export const fetchPropertyByIdSucceeded = (property: any) => ({
  type: FETCH_PROPERTY_BYID_SUCCEEDED,
  property,
});

export const addProperty = (property: any) => ({
  type: ADD_PROPERTY,
  property,
});

export const updateProperty = (property: any) => ({
  type: UPDATE_PROPERTY,
  property,
});

export const fetchProperty = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPropertyStarted());
    try {
      const response = await axios.get(
        "https://probation.sirkell.com/probation/test/properties"
      );
      dispatch(fetchPropertySucceeded(decrypt(response.data)));
    } catch (error) {
      dispatch(fetchPropertyFailed(error));
    }
  };
};

export const fetchPropertyByID = (id: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPropertyStarted());
    try {
      const response = await axios.get(
        `https://probation.sirkell.com/probation/test/properties/${id}`
      );
      dispatch(fetchPropertyByIdSucceeded(decrypt(response.data)));
    } catch (error) {
      dispatch(fetchPropertyFailed(error));
    }
  };
};

export const createProperty = (property: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPropertyStarted());
    try {
      const data = {
        payload: encrypt(property),
      };
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      console.log(data);
      await axios.post(
        "https://probation.sirkell.com/probation/test/properties",
        qs.stringify(data),
        config
      );
      dispatch(addProperty(property));
      alert("Sucessfully");
    } catch (error) {
      dispatch(fetchPropertyFailed(error));
    }
  };
};

export const editProperty = (property: any, id: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPropertyStarted());
    try {
      const data = {
        payload: encrypt(property),
      };
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      await axios.patch(
        `https://probation.sirkell.com/probation/test/properties/${id}`,
        qs.stringify(data),
        config
      );
      alert("successfully");
      dispatch(updateProperty(property));
    } catch (error) {
      dispatch(fetchPropertyFailed(error));
    }
  };
};
