import { 
  selectedDateSchedulesOpenDialog, 
  selectedDateSchedulesCloseDialog, 
  
} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(selectedDateSchedulesCloseDialog())
  }
}

export const openSelectedDateSchedulesDialog = (schedules, e) => {
  return async (dispatch) => {
    dispatch(selectedDateSchedulesOpenDialog());
  }
}