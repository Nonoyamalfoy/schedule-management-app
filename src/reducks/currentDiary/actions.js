export const CURRENT_DIARY_SET_ITEM = "CURRENT_DIARY_SET_ITEM";
export const CURRENT_DIARY_OPEN_DIALOG = "CURRENT_DIARY_OPEN_DIALOG";
export const CURRENT_DIARY_CLOSE_DIALOG = "CURRENT_DIARY_CLOSE_DIALOG";

export const currentDiarySetItem = payload => ({
  type: CURRENT_DIARY_SET_ITEM,
  payload
});

export const currentDiaryOpenDialog = () => ({
  type: CURRENT_DIARY_OPEN_DIALOG
});

export const currentDiaryCloseDialog = () => ({
  type: CURRENT_DIARY_CLOSE_DIALOG
})