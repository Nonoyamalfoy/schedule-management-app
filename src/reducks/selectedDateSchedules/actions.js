// export const SELECTED_DATE_SCHEDULES_SET_ITEM = "SELECTED_DATE_SCHEDULES_SET_ITEM";
export const SELECTED_DATE_SCHEDULES_OPEN_DIALOG = "SELECTED_DATE_SCHEDULES_OPEN_DIALOG";
export const SELECTED_DATE_SCHEDULES_CLOSE_DIALOG = "SELECTED_DATE_SCHEDULES_CLOSE_DIALOG";

// export const selectedDateSchedulesSetItem = payload => ({
//   type: SELECTED_DATE_SCHEDULES_SET_ITEM,
//   payload
// });

export const selectedDateSchedulesOpenDialog = () => ({
  type: SELECTED_DATE_SCHEDULES_OPEN_DIALOG
});

export const selectedDateSchedulesCloseDialog = () => ({
  type: SELECTED_DATE_SCHEDULES_CLOSE_DIALOG
})
