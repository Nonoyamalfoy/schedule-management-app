import {createSelector} from "reselect";

const addToDoSelector = (state) => state.addToDo;

export const getIsDialogOpen = createSelector(
  [addToDoSelector],
  (state) => state.isDialogOpen
);

export const getIsStartEdit = createSelector(
  [addToDoSelector],
  (state) => state.isStartEdit
);

export const getForm = createSelector(
  [addToDoSelector],
  (state) => state.form
);