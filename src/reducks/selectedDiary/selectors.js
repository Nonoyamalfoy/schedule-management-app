import {createSelector} from "reselect";

const selectedDiarySelector = (state) => state.selectedDiary;

export const getSelectedDiaryItem = createSelector(
  [selectedDiarySelector],
  state => state.item
);

export const getSelectedDiaryIsDialogOpen = createSelector(
  [selectedDiarySelector],
  state => state.isDialogOpen
);