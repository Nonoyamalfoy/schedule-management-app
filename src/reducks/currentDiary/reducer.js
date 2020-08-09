import * as Actions from "./actions";
import initialState from "../store/initialState";

export const currentDiaryReducer = (state = initialState.currentDiary, action) => {
  switch(action.type) {
    case Actions.CURRENT_DIARY_SET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case Actions.CURRENT_DIARY_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      };
    case Actions.CURRENT_DIARY_CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};