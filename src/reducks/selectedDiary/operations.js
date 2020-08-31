import { selectedDiaryOpenDialog, selectedDiaryCloseDialog, selectedDiarySetItem} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(selectedDiaryCloseDialog())
  }
}

export const openSelectedDiaryDialog = (diary, e) => {
  return async (dispatch) => {
    e.stopPropagation();

    dispatch(selectedDiarySetItem(diary));
    dispatch(selectedDiaryOpenDialog());
  }
}