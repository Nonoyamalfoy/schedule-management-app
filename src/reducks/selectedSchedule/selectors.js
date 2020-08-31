import {createSelector} from "reselect";

const selectedScheduleSelector = (state) => state.selectedSchedule;

export const getSelectedScheduleItem = createSelector(
  [selectedScheduleSelector],
  state => state.item
);

export const getSelectedScheduleIsDialogOpen = createSelector(
  [selectedScheduleSelector],
  state => state.isDialogOpen
);