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
import { currentDiaryReducer } from "../currentDiary/reducer";
import {LoadingReducer} from '../loading/reducers';

export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      loading: LoadingReducer,
      router: connectRouter(history),
      users: UsersReducer,
      calendar: CalendarReducer,
      addSchedule: AddScheduleReducer,
      addDiary: AddDiaryReducer,
      currentSchedule: currentScheduleReducer,
      currentDiary: currentDiaryReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}