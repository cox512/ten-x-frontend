import {
  CREATE_WATCHLIST,
  FETCH_WATCHLIST,
  FETCH_WATCHLISTS,
  EDIT_WATCHLIST,
  DELETE_WATCHLIST,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_WATCHLIST:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
