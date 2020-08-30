import { currentScheduleOpenDialog, currentScheduleCloseDialog, currentScheduleSetItem} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(currentScheduleCloseDialog())
  }
}

export const openCurrentScheduleDialog = (schedule, e) => {
  return async (dispatch) => {
    e.stopPropagation();
    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  }
}