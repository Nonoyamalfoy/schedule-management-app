import {createSelector} from "reselect";

const currentScheduleSelector = (state) => state.currentSchedule;

export const getCurrentScheduleItem = createSelector(
  [currentScheduleSelector],
  state => state.item
);

export const getCurrentScheduleIsDialogOpen = createSelector(
  [currentScheduleSelector],
  state => state.isDialogOpen
);