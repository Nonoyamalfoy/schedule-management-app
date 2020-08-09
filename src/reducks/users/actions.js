export const FETCH_DIARIES = "FETCH_DIARIES";
export const fetchDiariesAction = (diaries) => {
  return {
    type: "FETCH_DIARIES",
    payload: diaries
  }
}

export const FETCH_SCHEDULES = "FETCH_SCHEDULES";
export const fetchSchedulesAction = (schedules) => {
  return {
    type: "FETCH_SCHEDULES",
    payload: schedules
  }
}

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: "",
      schedules: [],
      diaries:[]
    }
  }
};