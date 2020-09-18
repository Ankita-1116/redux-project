import React from "react";
import { GLOBAL_DATA, DELETE_DATA } from "../redux/actionTypes";

const intialState = {
  // userType: "",
  // header: { back: true, heading: "", rootPage: false },

  header: { rootPage: false, logout: false },
  loaderVisible: false,
  currentPage: "",
  currentRowId: "",
  token: "",
};

export const Reducer = (state: any = intialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, action);
    case "RESET":
      return intialState;
    case "HEADER_OBJ":
      return Object.assign({}, state, action);
    case GLOBAL_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
