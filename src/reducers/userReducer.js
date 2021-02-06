import _ from "lodash";

import { SIGN_OUT, UPDATE_USER, DELETE_USER } from "../actions/types";

const INITIAL_STATE = {
  profile: {},
  auth: { isSignedIn: false },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };

    case DELETE_USER:
      return _.omit(state, action.payload);

    case SIGN_OUT:
      return {
        profile: {},
        auth: { isSignedIn: false },
      };

    default:
      return state;
  }
};
