import dayjs from "dayjs";
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
    diaries:[],
    ToDoList: [],
  },
  calendar: day,
  addSchedule:{
    form: {
      scheduleId: "",
      color: "default",
      date: day,
      title: "",
      description: "",
      location: "",
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
  addToDo: {
    form: {
      ToDoId: "",
      text: "",
      deadline: null,
      completed: false
    },
    isDialogOpen: false,
    isStartEdit: false
  },
  selectedSchedule: {
    item: null,
    isDialogOpen: false
  },
  selectedDiary: {
    item: null,
    isDialogOpen: false
  },
  selectedDateSchedules: {
    isDialogOpen: false
  },

};

export default initialState;