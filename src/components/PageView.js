import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

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
  const classes = useStyles();

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
                <h4>100</h4>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.decorate}>
            <Paper className={classes.paper}>
              <Typography component={"span"}>
                <h4 className={classes.headerCard}>
                  Page View<VisibilityIcon color="primary"></VisibilityIcon>
                </h4>
                <h4>100</h4>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.decorate}>
            <Paper className={classes.paper}>
              <Typography component={"span"}>
                <h4 className={classes.headerCard}>
                  Visitors <GroupIcon style={{ color: "orange" }}></GroupIcon>
                </h4>
                <h4>124</h4>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
