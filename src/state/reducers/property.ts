/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCEEDED,
  FETCH_PROPERTY_FAILED,
  FETCH_PROPERTY_BYID_SUCCEEDED,
  ADD_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
} from "../constant/property";

const initialState = {
  status: "uninitialized",
  property: [],
  payload: null,
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
    case FETCH_PROPERTY_BYID_SUCCEEDED: {
      return {
        ...state,
        status: "default",
        property: action.property,
      };
    }
    case ADD_PROPERTY: {
      return {
        ...state,
        status: "default",
        payload: [state.payload, action.payload],
        error: null,
      };
    }
    case UPDATE_PROPERTY: {
      return {
        ...state,
        status: "default",
      };
    }
    case DELETE_PROPERTY: {
      const propertyId = action.id;
      const updatedProperty = state.property.filter(
        (item) => item.id !== propertyId
      );
      return {
        ...state,
        status: "default",
        property: updatedProperty,
      };
    }
    default: {
      return state;
    }
  }
}
