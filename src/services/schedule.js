import { db} from "../firebase/index";

export const setSchedules = (calendar, schedules) => {
  if(schedules) {
    return(
      calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => e.date === c.format("YYYYMMDD"))
      }))
    )
  }
}

export const isCloseDialog = schedule => {
  // すべて空ならtrueを返す
  const isScheduleEmpty = schedule => {
    return !schedule.title && !schedule.description && !schedule.location;
  }
  const message = "保存されていない変更を破棄しますか？";
  // どれかに記入があるとき確認する
  return isScheduleEmpty(schedule) || window.confirm(message)
}

export const removeSchedule = (uid, scheduleId) => {
    db.collection("users").doc(uid)
    .collection("schedules")
    .doc(scheduleId)
    .delete()
}

export const toggleCompleted = (uid, scheduleId, completed) => {
    db.collection("users").doc(uid)
    .collection("schedules")
    .doc(scheduleId)
    .set({completed: !completed}, {merge: true})
}

export const setScheduleColor = color => {
  let scheduleColor
  switch (color) {
    case "default":
      scheduleColor = "#6274da"
      break;
    case "red":
      scheduleColor = "#CC0000"
      break;
    case "orange":
      scheduleColor = "#FF9933"
      break;
    case "green":
      scheduleColor = "#009900"
      break;
    default:
      break;
  }
  return scheduleColor
}