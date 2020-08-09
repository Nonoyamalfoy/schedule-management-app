import {createSelector} from "reselect";

const addDiarySelector = (state) => state.addDiary;

export const getIsDialogOpen = createSelector(
  [addDiarySelector],
  (state) => state.isDialogOpen
);

export const getIsStartEdit = createSelector(
  [addDiarySelector],
  (state) => state.isStartEdit
);

export const getForm = createSelector(
  [addDiarySelector],
  (state) => state.form
);