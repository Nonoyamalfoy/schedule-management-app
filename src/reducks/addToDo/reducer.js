import * as Actions from "./actions";
import initialState from "../store/initialState";

export const AddToDoReducer = (state = initialState.addToDo, action) => {
  switch(action.type) {
    case Actions.ADD_TODO_SET_VALUE:
      return {
        ...state,
        form: {...state.form, ...action.payload}
      }
    case Actions.ADD_TODO_OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true
      }
    case Actions.ADD_TODO_CLOSE_DIALOG:
      return initialState.addToDo;
    case Actions.ADD_TODO_START_EDIT:
      return {
        ...state, 
        isStartEdit: true 
      };
    default:
      return state;
  }
}