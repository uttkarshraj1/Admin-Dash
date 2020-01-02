import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    fontSize: "25px"
  },
  tablehead: {
    color: "grey",
    fontSize: "25px"
  },
  tableCell: {
    fontSize: "20px"
  },
  Paper: {
    width: "700px",
    marginLeft: "300px",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)"
  },
  heading: {
    fontSize: "20px",
    textAlign: "center"
  },
  btn: {
    color: "#5a53c5"
  }
});

export default function CreateTable({ data }) {
  const classes = useStyles();
  const arrOfPageViews = [];

  return (
    <Paper className={classes.Paper}>
      <Paper>
        <Typography component={"span"}>
          <h4 className={classes.heading}>
            Registered users page view history
          </h4>
        </Typography>
      </Paper>

      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell className={classes.tablehead} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tablehead} align="center">
                Page View
              </TableCell>

              <TableCell className={classes.tablehead} align="center">
                frequency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(data => (
              <TableRow key={data._id}>
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.email}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.pageViewCount}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.pageViewCount === 36 ? (
                    <Button className={classes.btn} variant="outlined">
                      Frequent
                    </Button>
                  ) : (
                    <Button className={classes.btn} variant="outlined">
                      Rare
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
