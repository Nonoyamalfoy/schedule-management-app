import { db} from "../firebase/index";

export const isCloseDialog = schedule => {
  // すべて空ならtrueを返す
  const isScheduleEmpty = schedule => {
    return !schedule.text && !schedule.description && !schedule.location;
  }
  const message = "保存されていない変更を破棄しますか？";
  // どれかに記入があるとき確認する
  return isScheduleEmpty(schedule) || window.confirm(message)
};

export const removeToDo = (uid, ToDoId) => {
  db.collection("users").doc(uid)
  .collection("ToDoList")
  .doc(ToDoId)
  .delete()
}

export const removecompletedToDoList = (uid, completedToDoList) => {
  console.log(completedToDoList);
  completedToDoList.map(completedToDo => {
    db.collection("users").doc(uid)
    .collection("ToDoList")
    .doc(completedToDo.ToDoId)
    .delete()
  })
}

export const toggleCompleted = (uid, ToDoId, completed) => {
  db.collection("users").doc(uid)
  .collection("ToDoList")
  .doc(ToDoId)
  .set({completed: !completed}, {merge: true})
}