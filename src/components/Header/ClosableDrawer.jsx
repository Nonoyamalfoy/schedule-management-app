import React, {useCallback, useState} from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import SeatchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {TextInput} from "../Uikit/index";
import { useDispatch } from "react-redux";
import {push} from "connected-react-router";
import  {signOut} from "../../reducks/users/operations";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ListIcon from '@material-ui/icons/List';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256
  },
  searchField: {
    alignItems: "center",
    display: "flex",
    marginLeft: 32
  }
}))

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const {container} = props;
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback((event) => {
    setKeyword(event.target.value)
  }, [setKeyword]);

  const selectMenu = (event, path) => {
    dispatch(push(path))
    props.onClose(event)
  }

  const menus = [
    {func: selectMenu, label: "Home", icon: <HomeIcon/>, id: "home", value: "/"},
    {func: selectMenu, label: "Calendar", icon: <DateRangeIcon/>, id: "calendar", value: "/calendar"},
    // {func: selectMenu, label: "To-do List", icon: <ListIcon/>, id: "todoList", value: "/todoList"},
    {func: selectMenu, label: "Diary", icon: <ChromeReaderModeIcon/>, id: "diaries", value: "/diaries"},
  ];


  return(
    <nav className={classes.drawer}> 
      <Drawer
        // container={container}
        // variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        className={classes.drawerPaper}
        // ModalProps={{keepMounted: true}}
      >
        <div
          onClose={(e) => props.onClose(e)}
          onKeyDown={(e) => props.onClose(e)}
        >
          <div className={classes.searchField}>
            <TextInput
              fullWidth={false}
              label={"キーワードを入力"}
              multiline={false}
              onChange={inputKeyword}
              required={false}
              rows={1}
              value={keyword}
              type={"text"}
            />
            <IconButton>
              <SeatchIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
            <ListItem button key="logout" onClick={(e) => {dispatch(signOut()); props.onClose(e)}}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </nav>
  )

}

export default ClosableDrawer;