import * as Actions from "./actions";
import initialState from "../store/initialState";

export const AddScheduleReducer = (state = initialState.addSchedule, action) => {
  switch(action.type) {
    case Actions.ADD_SCHEDULE_SET_VALUE:
      return {
        ...state,
        form: {...state.form, ...action.payload}
      }
    case Actions.ADD_SCHEDULE_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      }
    case Actions.ADD_SCHEDULE_CLOSE_DIALOG:
      return initialState.addSchedule;
    case Actions.ADD_SCHEDULE_START_EDIT:
      return {
        ...state, 
        isStartEdit: true 
      };
    default:
      return state;
  }
}