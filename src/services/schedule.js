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

export const setScheduleColor = color => {
  let scheduleColor
  switch (color) {
    case "default":
      scheduleColor = "#000088"
      break;
    case "red":
      scheduleColor = "#880000"
      break;
    case "orange":
      scheduleColor = "#D2691E"
      break;
    case "green":
      scheduleColor = "#008800"
      break;
    default:
      break;
  }
  return scheduleColor
}