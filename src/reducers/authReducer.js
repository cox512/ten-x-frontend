import { SIGN_IN, SIGN_OUT } from "../actions/types";

// const INITIAL_STATE = {
//   isSignedIn: true,
//   userId: 12,
// };

export default (state = { isSignedIn: true }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        //   userId: action.payload
      };

    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        //   userId: null
      };

    default:
      return state;
  }
};
