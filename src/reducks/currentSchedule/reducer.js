import * as Actions from "./actions";
import initialState from "../store/initialState";

export const currentScheduleReducer = (state = initialState.currentSchedule, action) => {
  switch(action.type) {
    case Actions.CURRENT_SCHEDULE_SET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case Actions.CURRENT_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      };
    case Actions.CURRENT_SCHEDULE_CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};
