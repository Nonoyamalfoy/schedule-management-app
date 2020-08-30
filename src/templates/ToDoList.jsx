import React from "react";
import { AddToDoDialog, ToDoListItem } from "../components/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { openAddToDoDialog } from "../reducks/addToDo/operation";
import { getToDoList, getUserId } from "../reducks/users/selectors";
import List from "@material-ui/core/List";
import { removecompletedToDoList } from "../services/ToDo";
import { CreateButton, DeleteButton } from "../components/Uikit";

const ToDoList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const ToDoList = getToDoList(selector);
  const completedToDoList = ToDoList.filter((ToDo) => ToDo.completed === true);
  const uid = getUserId(selector);

  return (
    <div className="p-ToDoList">
      <CreateButton onClick={() => dispatch(openAddToDoDialog())} />

      {completedToDoList.length > 0 && (
        <DeleteButton
          onClick={() => removecompletedToDoList(uid, completedToDoList)}
        />
      )}

      <div className="p-ToDoList__container">
        {ToDoList.length > 0 ? (
          <List>
            {ToDoList.map((ToDo) => (
              <ToDoListItem ToDo={ToDo} key={ToDo.ToDoId} />
            ))}
          </List>
        ) : (
          <h2 className="empty-item">Nothing to do.</h2>
        )}
        <AddToDoDialog />
      </div>
    </div>
  );
};
export default ToDoList;
