import * as Actions from "./actions";
import initialState from "../store/initialState";

export const selectedDateSchedulesReducer = (state = initialState.selectedDateSchedules, action) => {
  switch(action.type) {
    // case Actions.SELECTED_DATE_SCHEDULES_SET_ITEM:
    //   return {
    //     ...state,
    //     items: action.payload
    //   };
    case Actions.SELECTED_DATE_SCHEDULES_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      };
    case Actions.SELECTED_DATE_SCHEDULES_CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};
