import { Reducer } from "redux";
import { LoginState, LoginTypes } from "./types";

const INITIAL_STATE: LoginState = {
  data: [],
  error: false,
  logged: false
};

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOAD_REQUEST:
      return { ...state, logged: false };
    case LoginTypes.LOAD_SUCCESS:
      return {
        ...state,
        logged: true,
        error: false,
        data: action.payload.data
      };
    case LoginTypes.LOAD_FAILURE:
      return {
        ...state,
        logged: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
