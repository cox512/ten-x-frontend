/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
} from "./types";

import users from "../APIs/users";

export const actionTypes = {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
};

export const signIn = (userId) => {
  console.log("Signed In UserId:", userId);
  return {
    type: SIGN_IN,
    payload: userId,
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
  console.log("createUser");
  const response = await users.post("/users", formValues);

  dispatch({ type: CREATE_USER, payload: response.data });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await users.get("/users");

  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await users.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const editUser = (id, formValues) => async (dispatch) => {
  console.log("editUser info:", id, formValues);

  const response = await users.put(`users/${id}`, formValues);

  dispatch({ type: EDIT_USER, payload: response.data });
};

export const deleteUser = (id) => async (dispatch) => {
  await users.delete(`users/${id}`);

  dispatch({ type: DELETE_USER, payload: id });
};
