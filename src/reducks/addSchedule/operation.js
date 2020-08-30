import {addScheduleSetValue, addScheduleOpenDialog, addScheduleCloseDialog, addScheduleStartEdit} from "./actions";

export const setAddSchedule = value => {
  return async (dispatch) => {
    dispatch(addScheduleSetValue(value))
  }
};

export const openAddScheduleDialog = (date, color, scheduleId, title, description, location ) => {
  return async(dispatch) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({
      scheduleId: scheduleId,
      date: date.format("YYYYMMDD"),
      title: title,
      description: description,
      location: location,
      color: color
    }))
  }
};

export const closeAddScheduledialog = () => {
  return async (dispatch) => {
    dispatch(addScheduleCloseDialog())
  }
};

export const setIsEditStart = () => {
  return async(dispatch) => {
    dispatch(addScheduleStartEdit())
  }
};