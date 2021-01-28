import history from "../history";
import users from "../APIs/users";
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */

import {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_OUT,
  CREATE_USER,
  // FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
} from "./types";

const loginDetails = (fname, lname, username, email, userId, isSignedIn, status) => {
  return {
    profile: {
      fname,
      lname,
      username,
      email,
    },
    auth: {
      userId,
      isSignedIn,
      status,
    },
  };
};

export const signOut = (id) => {
  users.get(`/users/logout/${id}`);

  return {
    type: SIGN_OUT,
    payload: { profile: {}, auth: {} },
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
  const response = await users.post("/users/register", formValues);
  // Add proper error handling
  const { data } = response.data;
  const userAuthInfo = loginDetails(
    data.fname,
    data.lname,
    data.username,
    data.email,
    data.id,
    response.data.logged_in,
    response.data.status.code
  );

  if (response.status === 200) {
    dispatch({ type: CREATE_USER, payload: userAuthInfo });
    history.push("/");
  } else {
    history.push("/error/createuser");
    // dispatch({ type: "CREATE_USER_ERROR", payload: response });
  }
};

export const fetchUser = (username, password) => async (dispatch) => {
  const response = await users.post(
    "/users/login",
    {
      username,
      password,
    },
    // DO I NEED THIS?
    { withCredentials: true }
  );

  const { data } = response.data;
  const userAuthInfo = loginDetails(
    data.fname,
    data.lname,
    data.username,
    data.email,
    data.id,
    response.data.logged_in,
    response.data.status.code
  );

  if (response.data.status.code === 200) {
    dispatch({ type: FETCH_USER, payload: userAuthInfo });
    history.push(`/`);
  } else {
    history.push("/error/login");
  }
};

export const editUser = (id, formValues) => async (dispatch) => {
  const response = await users.put(`users/${id}`, formValues);

  dispatch({ type: EDIT_USER, payload: response.data });
  history.push(`/user/show/${id}`);
};

export const deleteUser = (id) => async (dispatch) => {
  await users.delete(`users/${id}`);

  dispatch({ type: DELETE_USER, payload: id });
  history.push(`/`);
};
