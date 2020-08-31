import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CalendarReducer = (state = initialState.calendar, action) => {
  switch (action.type){
    case Actions.CALENDAR_SET_DATE: 
      return action.payload
    default: 
      return state;
  } 
};
