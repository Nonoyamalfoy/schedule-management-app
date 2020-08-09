import dayjs from "dayjs";
import {formatDate} from "../../services/calendar";

const day = dayjs();

const initialState = {
  loading: {
    state: false,
    text: ""
  },
  users: {
    isSignedIn: false,
    role: "",
    uid: "",
    username: "",
    schedules: [],
    diaries:[]
  },
  calendar: formatDate(day),
  addSchedule:{
    form: {
      scheduleId: "",
      color: "default",
      date: day,
      title: "",
      description: "",
      location: "",
      completed: false
    },
    isDialogOpen: false,
    isStartEdit: false,
  },
  addDiary: {
    form: {
      diaryId: "",
      date: day,
      text: "",
    },
    isDialogOpen: false,
    isStartEdit: false,
  },
  currentSchedule: {
    item: null,
    isDialogOpen: false
  },
  currentDiary: {
    item: null,
    isDialogOpen: false
  }
};

export default initialState;