/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCEEDED,
  FETCH_PROPERTY_FAILED,
} from "../constant/property";
import { Dispatch } from "redux";
import { decrypt } from "../../util/descrypt";

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
