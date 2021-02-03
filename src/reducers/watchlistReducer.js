import {
  CREATE_WATCHLIST,
  FETCH_WATCHLIST,
  FETCH_WATCHLISTS,
  EDIT_WATCHLIST,
  DELETE_WATCHLIST,
} from "../actions/types";

const INITIAL_STATE = { watchlists: [], currentWatchlist: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
