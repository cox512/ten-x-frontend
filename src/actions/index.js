import history from "../history";
import database from "../APIs/database";
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */

import {
  STOCK_DAY_PERFORMANCE,
  STOCK_OVERVIEW,
  SIGN_OUT,
  UPDATE_USER,
  DELETE_USER,
  CREATE_WATCHLIST,
  FETCH_WATCHLISTS,
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

export const signOut = () => async (dispatch) => {
  const response = await database.get(`/users/logout`);

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
    dispatch({ type: UPDATE_USER, payload: userAuthInfo });
    history.push("/");
  } else {
    history.push("/error/createuser");
    // dispatch({ type: "CREATE_USER_ERROR", payload: response });
  }
};

// Is this check necessary?
export const checkUser = (token) => {
  database.get(
    "/users/",
    {
      headers: {
        Authorization: token,
      },
    },
    { withCredentials: true }
  );
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
    dispatch({ type: UPDATE_USER, payload: userAuthInfo });
    history.push(`/`);
  } else {
    history.push("/error/login");
  }
};

export const editUser = (id, formValues, token) => async (dispatch) => {
  // Add proper error handling
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

  dispatch({ type: UPDATE_USER, payload: editedUser });
  history.push(`/user/show/${id}`);
};

export const deleteUser = (id, token) => async (dispatch) => {
  console.log("User id:", id);
  await database.delete(
    `users/${id}`,
    {
      headers: {
        Authorization: token,
      },
    },
    { withCredentials: true }
  );

  dispatch({ type: DELETE_USER, payload: id });
  history.push(`/`);
};

/// ////////////////////////////
/// / WATCHLIST ACTION CREATORS
/// ///////////////////////////

export const createWatchlist = (formValues, token) => async (dispatch) => {
  // Instead of dispatching to reducer we simply call the fetchWatchlists call immediately after createWatchlist
  const res = await database.post("/api/v1/watchlists/", formValues, {
    headers: {
      Authorization: token,
    },
  });

  const listId = res.data.data.id;
  // console.log("res:", res);
  history.push(`/watchlist/show/${listId}`);

  dispatch({ type: CREATE_WATCHLIST });
};

export const fetchWatchlists = (token) => async (dispatch) => {
  let data = {};

  if (token) {
    const response = await database.get("/api/v1/watchlists/", {
      headers: {
        Authorization: token,
      },
    });
    data = response.data.data;
  }

  dispatch({ type: FETCH_WATCHLISTS, payload: data });
};

export const deleteWatchlist = (id, token) => async (dispatch) => {
  console.log("deleteWatchlist id: ", id);
  await database.delete(
    `/api/v1/watchlists/${id}`,
    {
      headers: {
        Authorization: token,
      },
    },
    { withCredentials: true }
  );

  dispatch({ type: DELETE_WATCHLIST, payload: id });
  history.push(`/`);
};
