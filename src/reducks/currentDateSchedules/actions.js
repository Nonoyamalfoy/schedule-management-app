export const CURRENT_DATE_SCHEDULES_SET_ITEM = "CURRENT_DATE_SCHEDULES_SET_ITEM";
export const CURRENT_DATE_SCHEDULES_OPEN_DIALOG = "CURRENT_DATE_SCHEDULES_OPEN_DIALOG";
export const CURRENT_DATE_SCHEDULES_CLOSE_DIALOG = "CURRENT_DATE_SCHEDULES_CLOSE_DIALOG";

export const currentDateSchedulesSetItem = payload => ({
  type: CURRENT_DATE_SCHEDULES_SET_ITEM,
  payload
});

export const currentDateSchedulesOpenDialog = () => ({
  type: CURRENT_DATE_SCHEDULES_OPEN_DIALOG
});

export const currentDateSchedulesCloseDialog = () => ({
  type: CURRENT_DATE_SCHEDULES_CLOSE_DIALOG
})
