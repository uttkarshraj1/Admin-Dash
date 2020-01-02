import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import io from "socket.io-client";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 250
  },
  control: {
    padding: theme.spacing(10)
  },
  apply: { margin: "5px" },
  decorate: {
    margin: "10px",
    textAlign: "center"
  },
  headerCard: {
    padding: "10px"
  }
}));

export default function PageView() {
  const [spacing, setSpacing] = React.useState(10);
  const [activeUsers, setActiveUsers] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("active user update", function(activeUsers) {
      setActiveUsers(activeUsers);
    });
    socket.on("visitors update", function(visitors) {
      setVisitors(visitors);
    });
    socket.on("pageView update", function(totalViews) {
      setTotalViews(totalViews);
    });
  }, []);

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid
          className={classes.apply}
          container
          justify="center"
          spacing={spacing}
        >
          <Grid className={classes.decorate}>
            <Paper className={classes.paper}>
              <Typography component={"span"}>
                <h4 className={classes.headerCard}>
                  Active Users
                  <AccountCircleSharpIcon color="secondary"></AccountCircleSharpIcon>
                </h4>
                <h4>{activeUsers}</h4>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.decorate}>
            <Paper className={classes.paper}>
              <Typography component={"span"}>
                <h4 className={classes.headerCard}>
                  Page View<VisibilityIcon color="primary"></VisibilityIcon>
                </h4>
                <h4>{totalViews}</h4>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.decorate}>
            <Paper className={classes.paper}>
              <Typography component={"span"}>
                <h4 className={classes.headerCard}>
                  visitors <GroupIcon style={{ color: "orange" }}></GroupIcon>
                </h4>
                <h4>{visitors} </h4>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
