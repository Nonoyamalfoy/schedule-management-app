import { 
  currentDateSchedulesOpenDialog, 
  currentDateSchedulesCloseDialog, 
  currentDateSchedulesSetItem
} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(currentDateSchedulesCloseDialog())
  }
}

export const openCurrentDateSchedulesDialog = (schedules, e) => {
  return async (dispatch) => {
    // e.stopPropagation();
    dispatch(currentDateSchedulesSetItem(schedules));
    dispatch(currentDateSchedulesOpenDialog());
  }
}