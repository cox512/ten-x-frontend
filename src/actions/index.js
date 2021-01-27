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

// export const signIn = (userId) => {
//   console.log("Signed In UserId:", userId);
//   history.push("/");
//   return {
//     type: SIGN_IN,
//     payload: userId,
//   };
// };

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
  // Try automatically logging the user in as well. Python is logging me in, but my front end doesn't realize it. I have access to the user's id here, but I don't need that. For login I need username, which I  have and a password, which I don't
  console.log(response);
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
