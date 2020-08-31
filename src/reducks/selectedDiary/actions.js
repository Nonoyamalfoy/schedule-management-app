export const SELECTED_DIARY_SET_ITEM = "SELECTED_DIARY_SET_ITEM";
export const SELECTED_DIARY_OPEN_DIALOG = "SELECTED_DIARY_OPEN_DIALOG";
export const SELECTED_DIARY_CLOSE_DIALOG = "SELECTED_DIARY_CLOSE_DIALOG";

export const selectedDiarySetItem = payload => ({
  type: SELECTED_DIARY_SET_ITEM,
  payload
});

export const selectedDiaryOpenDialog = () => ({
  type: SELECTED_DIARY_OPEN_DIALOG
});

export const selectedDiaryCloseDialog = () => ({
  type: SELECTED_DIARY_CLOSE_DIALOG
})