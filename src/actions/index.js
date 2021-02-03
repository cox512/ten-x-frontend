import history from "../history";
import database from "../APIs/database";
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */

import {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_OUT,
  CREATE_USER,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  CREATE_WATCHLIST,
  FETCH_WATCHLISTS,
  FETCH_WATCHLIST,
  EDIT_WATCHLIST,
  DELETE_WATCHLIST,
} from "./types";

const loginDetails = (fname, lname, username, email, userId, isSignedIn, status, token) => {
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
      token,
    },
  };
};

export const signOut = (id, token) => async (dispatch) => {
  const response = await database.get(`/users/logout/${id}`, {
    headers: { Authorization: token },
  });

  console.log(response);

  if (response.status === 200) {
    dispatch({ type: SIGN_OUT, payload: { profile: {}, auth: {} } });
    history.push("/");
  } else {
    history.push("/error/createuser");
  }
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

/// ////////////////////////////
/// / USER ACTION CREATORS
/// ///////////////////////////

export const createUser = (formValues) => async (dispatch) => {
  const response = await database.post("/users/register", formValues);
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

export const fetchUser = (username, password, token) => async (dispatch) => {
  const response = await database.post(
    "/users/login",
    {
      username,
      password,
    },
    {
      headers: {
        Authorization: token,
      },
    },
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
    response.data.status.code,
    data.token
  );

  if (response.data.status.code === 200) {
    dispatch({ type: FETCH_USER, payload: userAuthInfo });
    history.push(`/`);
  } else {
    history.push("/error/login");
  }
};

export const editUser = (id, formValues, token) => async (dispatch) => {
  // Add proper error handling
  console.log("token:", token);
  const response = await database.put(
    `users/${id}`,
    formValues,
    {
      headers: {
        Authorization: token,
      },
    },
    { withCredentials: true }
  );
  const { data } = response.data;

  const editedUser = loginDetails(
    data.fname,
    data.lname,
    data.username,
    data.email,
    data.id,
    true,
    response.data.status.code,
    response.config.headers.Authorization
  );

  dispatch({ type: EDIT_USER, payload: editedUser });
  history.push(`/user/show/${id}`);
};

export const deleteUser = (id) => async (dispatch) => {
  await database.delete(`users/${id}`);

  dispatch({ type: DELETE_USER, payload: id });
  history.push(`/`);
};

/// ////////////////////////////
/// / WATCHLIST ACTION CREATORS
/// ///////////////////////////

export const createWatchlist = (formValues) => async (dispatch) => {
  const response = await database.post("/api/v1/watchlists", formValues);
  // Add proper error handling
  const { data } = response.data;
  console.log("data:", data);

  // if (response.status === 200) {
  //   dispatch({ type: CREATE_USER, payload: userAuthInfo });
  //   history.push("/");
  // } else {
  //   history.push("/error/createuser");
  //   // dispatch({ type: "CREATE_USER_ERROR", payload: response });
  // }
};

export const deleteWatchlist = () => {
  return "hello";
};
