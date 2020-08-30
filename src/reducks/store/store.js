import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {CalendarReducer} from "../calendar/reducer";
import { AddScheduleReducer } from "../addSchedule/reducer";
import thunk from "redux-thunk";
import {currentScheduleReducer} from "../currentSchedule/reducer";
import {UsersReducer} from "../users/reducers";
import { AddDiaryReducer } from "../addDiary/reducer";
import {AddToDoReducer} from "../addToDo/reducer";
import { currentDiaryReducer } from "../currentDiary/reducer";
import {LoadingReducer} from '../loading/reducers';
import {currentDateSchedulesReducer} from "../currentDateSchedules/reducer";

export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      loading: LoadingReducer,
      router: connectRouter(history),
      users: UsersReducer,
      calendar: CalendarReducer,
      addSchedule: AddScheduleReducer,
      addDiary: AddDiaryReducer,
      addToDo: AddToDoReducer,
      currentSchedule: currentScheduleReducer,
      currentDiary: currentDiaryReducer,
      currentDateSchedules: currentDateSchedulesReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}