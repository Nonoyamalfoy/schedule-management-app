import React, {useState, useCallback} from "react";
import {makeStyles} from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { getIsSignedIn } from "../../reducks/users/selectors";
import {HeaderMenus, ClosableDrawer} from "./index";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#3f51b5",
  },
  toolBar: {
    padding: "0",
    margin: "0 auto",
    maxWidth: 1000,
    height: "48px",
    width: "100%",
  },
  toolBarContainer: {
    width: "100%",
  }
});

const Header = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback((event) => {
    if(event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(!open)
  }, [setOpen, open])


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <ToolBar className={classes.toolBar}>
          {isSignedIn && (
            <div className={classes.toolBarContainer}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
            </div>
          )}
        </ToolBar>
      </AppBar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )

};

export default Header;