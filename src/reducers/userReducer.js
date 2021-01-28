import _ from "lodash";

import { CREATE_USER, FETCH_USER, DELETE_USER, EDIT_USER, SIGN_OUT } from "../actions/types";

export default (state = { profile: {}, auth: {} }, action) => {
  switch (action.type) {
    case FETCH_USER:
    case CREATE_USER:
    case SIGN_OUT:
      return { ...state, ...action.payload };

    case EDIT_USER:
      return { ...state, ...action.payload };

    case DELETE_USER:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
