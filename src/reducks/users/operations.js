import { auth, FirebaseTimestamp, db } from "../../firebase/index";
import { push } from "connected-react-router";
import {
  signInAction,
  signOutAction,
  fetchSchedulesAction,
  fetchDiariesAction,
  fetchToDoListAction,
} from "./actions";
// import { getDate } from "../../services/calendar";
import { closeAddDiaryDialog } from "../addDiary/operations";
import { closeAddScheduledialog } from "../addSchedule/operation";
import { hideLoadingAction, showLoadingAction } from "../loading/actions";
import { closeAddToDodialog } from "../addToDo/operation";
import { isValidEmailFormat } from "../../services/user";

export const fetchDiaries = (diaries) => {
  return async (dispatch) => {
    await dispatch(fetchDiariesAction(diaries));
  };
};

export const fetchSchedules = (schedules) => {
  return async (dispatch) => {
    await dispatch(fetchSchedulesAction(schedules));
  };
};

export const fetchToDoList = (ToDoList) => {
  return async (dispatch) => {
    await dispatch(fetchToDoListAction(ToDoList));
  };
};

export const addDiary = () => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const diary = getState().addDiary.form;
    const timestamp = FirebaseTimestamp.now();
    const date = getState().calendar;
    const currentDate = date.format("YYYYMMDD");

    if (diary.text === "") {
      alert("必須項目が未入力です");
    } else {
      if (diary.diaryId) {
        dispatch(closeAddDiaryDialog());
        const diaryRef = db
          .collection("users")
          .doc(uid)
          .collection("diaries")
          .doc(diary.diaryId);
        diary["updated_at"] = timestamp;
        await diaryRef.set(diary, { merge: true });
      } else {
        dispatch(closeAddDiaryDialog());
        const diaryRef = db
          .collection("users")
          .doc(uid)
          .collection("diaries")
          .doc();
        diary["date"] = currentDate;
        diary["diaryId"] = diaryRef.id;
        diary["created_at"] = timestamp;
        diary["updated_at"] = timestamp;
        await diaryRef.set(diary);
      }
    }
  };
};

export const addToDo = () => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const ToDo = getState().addToDo.form;
    const timestamp = FirebaseTimestamp.now();

    if (ToDo.text === "") {
      alert("必須項目が未入力です");
    } else {
      if (ToDo.ToDoId) {
        dispatch(closeAddToDodialog());
        const ToDoRef = db
          .collection("users")
          .doc(uid)
          .collection("ToDoList")
          .doc(ToDo.ToDoId);
        ToDo["updated_at"] = timestamp;
        await ToDoRef.set(ToDo, { merge: true });
      } else {
        dispatch(closeAddToDodialog());
        const ToDoRef = db
          .collection("users")
          .doc(uid)
          .collection("ToDoList")
          .doc();
        ToDo["ToDoId"] = ToDoRef.id;
        ToDo["created_at"] = timestamp;
        ToDo["updated_at"] = timestamp;
        await ToDoRef.set(ToDo);
      }
    }
  };
};

export const addSchedule = () => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const timestamp = FirebaseTimestamp.now();
    const schedule = getState().addSchedule.form;

    if (schedule.title === "") {
      alert("必須項目が未入力です");
    } else {
      if (schedule.scheduleId) {
        dispatch(closeAddScheduledialog());
        const scheduleRef = db
          .collection("users")
          .doc(uid)
          .collection("schedules")
          .doc(schedule.scheduleId);
        schedule["updated_at"] = timestamp;
        await scheduleRef.set(schedule, { merge: true });
      } else {
        dispatch(closeAddScheduledialog());
        const scheduleRef = db
          .collection("users")
          .doc(uid)
          .collection("schedules")
          .doc();
        schedule["scheduleId"] = scheduleRef.id;
        schedule["created_at"] = timestamp;
        schedule["updated_at"] = timestamp;
        await scheduleRef.set(schedule);
      }
    }
  };
};

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            if (!data) {
              throw new Error("ユーザーデータが存在しません。");
            }
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            );
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Reset Password..."));
    if (email === "") {
      dispatch(hideLoadingAction());
      alert("必須項目が未入力です");
      return false
    }
    if (!isValidEmailFormat(email)) {
      dispatch(hideLoadingAction());
      alert('メールアドレスの形式が不正です。')
      return false
    }
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(hideLoadingAction());
        alert("入力されたアドレスにパスワードリセット用のメールを送信しました");
        dispatch("/signin");
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        alert("パスワードリセットに失敗しました。");
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Sign in..."));
    if (email === "" || password === "") {
      dispatch(hideLoadingAction());
      alert("必須項目が未入力です");
      return false;
    }
    if (!isValidEmailFormat(email)) {
      dispatch(hideLoadingAction());
      alert("メールアドレスの形式が不正です。");
      return false;
    }
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (!user) {
          dispatch(hideLoadingAction());
          throw new Error("ユーザーIDを取得できません");
        }
        const uid = user.uid;
        return db
          .collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            if (!data) {
              dispatch(hideLoadingAction());
              throw new Error("ユーザーデータが存在しません");
            }
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            );
            dispatch(hideLoadingAction());
            dispatch(push("/"));
          });
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        alert("サインインに失敗しました");
      });
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (!isValidEmailFormat(email)) {
      alert("メールアドレスの形式が不正です。もう1度お試しください。");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください。");
      return false;
    }
    if (password.length < 6) {
      alert("パスワードは6文字以上で入力してください。");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch(showLoadingAction("Sign up..."));
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();
          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username,
          };
          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
              dispatch(hideLoadingAction());
            });
        }
      })
      .catch((error) => {
        dispatch(hideLoadingAction());
        alert("アカウント登録に失敗しました。もう1度お試しください。");
        throw new Error(error);
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Sign out..."));
    auth
      .signOut()
      .then(() => {
        dispatch(signOutAction());
        dispatch(hideLoadingAction());
        dispatch(push("/signin"));
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        throw new Error("ログアウトに失敗しました。");
      });
  };
};
