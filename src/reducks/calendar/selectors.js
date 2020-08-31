import {createSelector} from "reselect";

const calendarSelector = (state) => state.calendar;

export const getCurrentDate = createSelector(
  [calendarSelector],
  (state) => state
);



