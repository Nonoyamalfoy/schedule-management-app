import {createSelector} from "reselect";

const currentDateScheduleSelector = (state) => state.currentDateSchedules;

export const getCurrentDateSchedules = createSelector(
  [currentDateScheduleSelector],
  state => state.items
);

export const getCurrentDateSchedulesIsDialogOpen = createSelector(
  [currentDateScheduleSelector],
  state => state.isDialogOpen
);