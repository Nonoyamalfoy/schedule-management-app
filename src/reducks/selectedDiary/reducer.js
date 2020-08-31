import * as Actions from "./actions";
import initialState from "../store/initialState";

export const selectedDiaryReducer = (state = initialState.selectedDiary, action) => {
  switch(action.type) {
    case Actions.SELECTED_DIARY_SET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case Actions.SELECTED_DIARY_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      };
    case Actions.SELECTED_DIARY_CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};