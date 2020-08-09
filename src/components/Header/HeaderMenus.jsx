import React from "react"
import IconButton from "@material-ui/core/IconButton";
import MenuIcoon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/styles";
import {Navigation} from "../Header/index";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  headerMenus:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    marginRight: "20px",
    display: "flex",
  },
  icon: {
    color: "white"
  }
})

const HeaderMenus = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.headerMenus}>
      <Navigation/>
      <div className={classes.iconButton}>
        <IconButton onClick={(event) => props.handleDrawerToggle(event)}>
          <MenuIcoon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  )
}

export default HeaderMenus;