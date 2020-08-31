import {createSelector} from "reselect";

const addScheduleSelector = (state) => state.addSchedule;

export const getIsDialogOpen = createSelector(
  [addScheduleSelector],
  (state) => state.isDialogOpen
);

export const getIsStartEdit = createSelector(
  [addScheduleSelector],
  (state) => state.isStartEdit
);

export const getForm = createSelector(
  [addScheduleSelector],
  (state) => state.form
);
