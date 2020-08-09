import { currentDiaryOpenDialog, currentDiaryCloseDialog, currentDiarySetItem} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(currentDiaryCloseDialog())
  }
}

export const openCurrentDiaryDialog = (diary, e) => {
  return async (dispatch) => {
    e.stopPropagation();

    dispatch(currentDiarySetItem(diary));
    dispatch(currentDiaryOpenDialog());
  }
}