import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.FETCH_DIARIES:
      return {
        ...state,
        diaries: [...action.payload]
      }
    case Actions.FETCH_SCHEDULES:
      return {
        ...state,
        schedules: [...action.payload]
      }
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_OUT:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}