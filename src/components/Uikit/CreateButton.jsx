import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  create: {
    backgroundColor: "#20295f",
    color: "white",
    position: "absolute",
    bottom: "20px",
    right: "20px",
    zIndex: "10",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "#20295f",
      color: "grey"
    },
    [theme.breakpoints.up(1000)]: {
      right: "calc(50% - 500px)",
      bottom: "80px",
      transform: "translateX(50%)",
    }
  },
}))

const CreateButton = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const createClass = props.className ? props.className : classes.create
  return(
    <IconButton 
      className={createClass}  
      size={props.size}
      onClick={() => dispatch(props.onClick)}
    >
        <CreateIcon />
    </IconButton>
  )
}

export default CreateButton;