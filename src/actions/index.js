import history from "../history";
import users from "../APIs/users";
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
  CLEAR_USER,
} from "./types";

export const signIn = (userId) => {
  console.log("Signed In UserId:", userId);
  history.push("/");
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
  return {
    type: STOCK_OVERVIEW,
    payload: stock,
  };
};

export const createUser = (formValues) => async (dispatch) => {
  const response = await users.post("/users", formValues);
  // Find the proper way to error handle. Is it 'try' and 'catch'?
  if (response.status === 201) {
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push("/login");
  } else {
    // Replace this with an actual error page.
    // alert("There was an error creating your account.");
    history.push("/error/createuser");
  }
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
  const response = await users.patch(`users/${id}`, formValues);

  dispatch({ type: EDIT_USER, payload: response.data });
  history.push(`/user/show/${id}`);
};

export const deleteUser = (id) => async (dispatch) => {
  await users.delete(`users/${id}`);

  dispatch({ type: DELETE_USER, payload: id });
  history.push(`/`);
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};
