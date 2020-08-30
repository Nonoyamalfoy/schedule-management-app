import {addToDoSetValue, addToDoOpenDialog, addToDoCloseDialog, addToDoStartEdit} from "./actions";
import dayjs from "dayjs";

export const setAddToDo = value => {
  return async (dispatch) => {
    dispatch(addToDoSetValue(value))
  }
};

export const openAddToDoDialog = (ToDoId, text, deadline) => {
  const setDeadline = deadline ? dayjs(deadline).format("YYYYMMDDHHmm") : deadline
  return async(dispatch) => {
    dispatch(addToDoOpenDialog());
    if(ToDoId) {
      dispatch(addToDoSetValue({
        ToDoId: ToDoId,
        text: text,
        deadline: setDeadline
      }));
    }
  }
};

export const closeAddToDodialog = () => {
  return async (dispatch) => {
    dispatch(addToDoCloseDialog())
  }
};

export const setIsEditStart = () => {
  return async(dispatch) => {
    dispatch(addToDoStartEdit())
  }
};