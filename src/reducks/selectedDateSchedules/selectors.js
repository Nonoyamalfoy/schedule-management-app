import {createSelector} from "reselect";

const selectedDateScheduleSelector = (state) => state.selectedDateSchedules;

// export const getSelectedDateSchedules = createSelector(
//   [selectedDateScheduleSelector],
//   state => state.items
// );

export const getSelectedDateSchedulesIsDialogOpen = createSelector(
  [selectedDateScheduleSelector],
  state => state.isDialogOpen
);