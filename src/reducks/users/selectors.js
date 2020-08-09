import {createSelector} from "reselect";

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)

export const getSchedules = createSelector(
  [usersSelector],
  state => state.schedules
)

export const getDiaries = createSelector(
  [usersSelector],
  state => state.diaries
)

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)