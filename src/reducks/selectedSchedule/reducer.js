import * as Actions from "./actions";
import initialState from "../store/initialState";

export const selectedScheduleReducer = (state = initialState.selectedSchedule, action) => {
  switch(action.type) {
    case Actions.SELECTED_SCHEDULE_SET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case Actions.SELECTED_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      };
    case Actions.SELECTED_SCHEDULE_CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};
