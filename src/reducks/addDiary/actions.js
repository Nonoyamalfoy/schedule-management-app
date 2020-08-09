export const ADD_DIARY_SET_VALUE = "ADD_DIARY_SET_VALUE";
export const ADD_DIARY_OPEN_DIALOG = "ADD_DIARY_OPEN_DIALOG";
export const ADD_DIARY_CLOSE_DIALOG = "ADD_DIARY_CLOSE_DIALOG";
export const ADD_DIARY_START_EDIT = "ADD_DIARY_START_EDIT";

export const addDiarySetValue = payload => ({
  type: ADD_DIARY_SET_VALUE,
  payload
});

export const addDiaryOpenDialog = () => ({
  type: ADD_DIARY_OPEN_DIALOG
});

export const addDiaryCloseDialog = () => ({
  type: ADD_DIARY_CLOSE_DIALOG
});
export const addDiaryStartEdit = () => ({
  type: ADD_DIARY_START_EDIT
});