/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCEEDED,
  FETCH_PROPERTY_FAILED,
} from "../constant/property";

const initialState = {
  status: "uninitialized",
  property: [],
  error: null,
};

export default function propertyReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_PROPERTY_START: {
      return {
        ...state,
        status: "loading",
      };
    }
    case FETCH_PROPERTY_SUCCEEDED: {
      return {
        ...state,
        status: "default",
        property: action.property,
      };
    }
    case FETCH_PROPERTY_FAILED: {
      return {
        ...state,
        status: "FAILED",
        property: [],
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
