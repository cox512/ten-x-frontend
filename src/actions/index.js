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
    history.push("/error/createuser");
  }
};

export const fetchUsers = () => async (dispatch) => {
  const response = await users.get("/users");

  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUser = (username, password) => async (dispatch) => {
  const response = await users.post(
    "/users/login",
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  const { data } = response.data;
  const loginDetails = {
    profile: {
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      email: data.email,
    },
    auth: {
      userId: data.id,
      isSignedIn: response.data.logged_in,
      status: response.data.status.code,
    },
  };
  if (response.data.status.code === 200) {
    dispatch({ type: FETCH_USER, payload: loginDetails });
    history.push(`/`);
  } else {
    history.push("/error/login");
  }
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
