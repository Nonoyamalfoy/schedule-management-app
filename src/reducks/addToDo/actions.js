export const ADD_TODO_SET_VALUE = "ADD_TODO_SET_VALUE";
export const ADD_TODO_OPEN_DIALOG = "ADD_TODO_OPEN_DIALOG";
export const ADD_TODO_CLOSE_DIALOG = "ADD_TODO_CLOSE_DIALOG";
export const ADD_TODO_START_EDIT = "ADD_TODO_START_EDIT";

export const addToDoSetValue = payload => ({
  type: ADD_TODO_SET_VALUE,
  payload
});

export const addToDoOpenDialog = () => ({
  type: ADD_TODO_OPEN_DIALOG
});

export const addToDoCloseDialog = () => ({
  type: ADD_TODO_CLOSE_DIALOG
});

export const addToDoStartEdit = () => ({
  type: ADD_TODO_START_EDIT
});