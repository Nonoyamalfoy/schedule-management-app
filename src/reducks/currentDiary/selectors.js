import {createSelector} from "reselect";

const currentDiarySelector = (state) => state.currentDiary;

export const getCurrentDiaryItem = createSelector(
  [currentDiarySelector],
  state => state.item
);

export const getCurrentDiaryIsDialogOpen = createSelector(
  [currentDiarySelector],
  state => state.isDialogOpen
);