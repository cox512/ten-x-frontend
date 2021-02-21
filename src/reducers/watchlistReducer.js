/* eslint-disable no-console */
import _ from "lodash";

import { FETCH_WATCHLISTS, DELETE_WATCHLIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WATCHLISTS:
      // Watchlists are loaded up on page load, if there is no user logged in there aren't any and it throws an error. To avoid this, check to see if there are any watchlists, first. If there aren't we simply return an empty object.
      if (Object.keys(action.payload)[0]) {
        return { ...state, ..._.mapKeys(action.payload, "id") };
      }
      return {};

    case DELETE_WATCHLIST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
