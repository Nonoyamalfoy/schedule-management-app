import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  delete: {
    backgroundColor: "#20295f",
    color: "white",
    position: "absolute",
    bottom: "30px",
    left: "20px",
    zIndex: "10",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "#20295f",
      color: "grey",
    },
    [theme.breakpoints.up(1000)]: {
      left: "calc(50% - 500px)",
      bottom: "80px",
      transform: "translateX(-50%)",
    },
  },
}))

const DeleteButton = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return(
    <IconButton 
      className={classes.delete}  
      size="medium" 
      onClick={() => dispatch(props.onClick)}
    >
        <DeleteIcon />
    </IconButton>
  )
}

export default DeleteButton;