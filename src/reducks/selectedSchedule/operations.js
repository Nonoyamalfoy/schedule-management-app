import { selectedScheduleOpenDialog, selectedScheduleCloseDialog, selectedScheduleSetItem} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(selectedScheduleCloseDialog())
  }
}

export const openSelectedScheduleDialog = (schedule, e) => {
  return async (dispatch) => {
    e.stopPropagation();
    dispatch(selectedScheduleSetItem(schedule));
    dispatch(selectedScheduleOpenDialog());
  }
}