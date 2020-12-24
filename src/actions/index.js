/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import { STOCK_DAY_PERFORMANCE, STOCK_OVERVIEW, SIGN_IN, SIGN_OUT } from "./types";
import users from "../APIs/users";

export const actionTypes = {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_IN,
  SIGN_OUT,
};

export const signIn = () => {
  console.log("signIn runs");
  // Change the payload back to UserId and pass userId into params
  return {
    type: SIGN_IN,
    payload: true,
  };
};

export const signOut = () => {
  console.log("signOut runs");
  return {
    type: SIGN_OUT,
    payload: false,
  };
};

export const fetchStockDayPerf = (stock) => {
  return {
    type: STOCK_DAY_PERFORMANCE,
    payload: stock,
  };
};

export const fetchStockOverview = (stock) => {
  // console.log("fetchStockOverview:", stock);
  return {
    type: STOCK_OVERVIEW,
    payload: stock,
  };
};

export const createUser = (formValues) => async (dispatch) => {
  users.post("/users", formValues);
};
