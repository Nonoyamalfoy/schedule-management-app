import { db} from "../firebase/index";
import HTMLReactParser from "html-react-parser";

export const isCloseDialog = diary => {
  // diary.textが空ならtrueを返す
  const isDiaryEmpty = diary => {
    return !diary.text;
  }
  const message = "保存されていない内容を破棄しますか？";
  // isDiaryEmpty(diary)がtrue(テキストが空)でないとき確認
  return isDiaryEmpty(diary) || window.confirm(message)
}

export const removeDiary = (uid, diaryId) => {
  db.collection("users")
  .doc(uid)
  .collection("diaries")
  .doc(diaryId)
  .delete();
};

export const returnCodeToBr = (text) => {
    if (text === "") {
      return text;
    } else {
      return HTMLReactParser(text.replace(/\r?\n/g, "<br/>"));
    }
};