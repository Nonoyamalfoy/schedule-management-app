import {addDiarySetValue, addDiaryOpenDialog, addDiaryCloseDialog, addDiaryStartEdit } from "./actions";

export const setAddDiary = value => {
  return async (dispatch) => {
    dispatch(addDiarySetValue(value))
  }
};

export const openAddDiaryDialog = (diaryDate, diaryId, text) => {
  return async(dispatch) => {
    dispatch(addDiaryOpenDialog());
    dispatch(addDiarySetValue({
      date: diaryDate,
      diaryId: diaryId,
      text: text
    }))
  }
};

export const closeAddDiaryDialog = () => {
  return async(dispatch) => {
    dispatch(addDiaryCloseDialog())
  }
};

export const setIsEditStart = () => {
  return async(dispatch) => {
    dispatch(addDiaryStartEdit())
  }
};