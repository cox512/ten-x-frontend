import _ from "lodash";

import { CREATE_USER, FETCH_USERS, FETCH_USER, DELETE_USER, EDIT_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case FETCH_USER:
      return { profile: action.payload };

    case EDIT_USER:
      return { ...state, profile: action.payload };

    case DELETE_USER:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
