export const SELECTED_SCHEDULE_SET_ITEM = "SELECTED_SCHEDULE_SET_ITEM";
export const SELECTED_SCHEDULE_OPEN_DIALOG = "SELECTED_SCHEDULE_OPEN_DIALOG";
export const SELECTED_SCHEDULE_CLOSE_DIALOG = "SELECTED_SCHEDULE_CLOSE_DIALOG";

export const selectedScheduleSetItem = payload => ({
  type: SELECTED_SCHEDULE_SET_ITEM,
  payload
});

export const selectedScheduleOpenDialog = () => ({
  type: SELECTED_SCHEDULE_OPEN_DIALOG
});

export const selectedScheduleCloseDialog = () => ({
  type: SELECTED_SCHEDULE_CLOSE_DIALOG
})
