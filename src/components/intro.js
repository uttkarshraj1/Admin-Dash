import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    float: "right"
  },
  paper: {
    height: "80px",
    width: "calc(100%-260px)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "260px"
  }
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.root}>
        <Avatar src="/broken-image.jpg" />
      </div>
    </Paper>
  );
}
