import * as Actions from "./actions";
import initialState from "../store/initialState";

export const AddDiaryReducer = (state = initialState.addDiary, action) => {
  switch(action.type) {
    case Actions.ADD_DIARY_SET_VALUE:
      return {
        ...state,
        form: {...state.form, ...action.payload}
      }
    case Actions.ADD_DIARY_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      }
    case Actions.ADD_DIARY_CLOSE_DIALOG:
      return initialState.addDiary;
    case Actions.ADD_DIARY_START_EDIT:
      return {
        ...state, 
        isStartEdit: true 
      };
  default:
    return state;
  }
} 