import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    // width: "400px",
    // marginLeft: "295px",
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
    padding: "15px",
    fontSize: "20px"
  }
});

export default function CreateTable({ data }) {
  const classes = useStyles();

  return (
    <Paper className={classes.Paper}>
      <Typography component={"span"}>
        <h4 className={classes.heading}>Registered users page view history</h4>
      </Typography>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow>
              {/* <TableCell className={classes.tablehead} align="center">
                User Id
              </TableCell> */}
              <TableCell className={classes.tablehead} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tablehead} align="center">
                Page View
              </TableCell>
              {/* <TableCell className={classes.tablehead} align="center">
                loggedInTime
              </TableCell>
              <TableCell className={classes.tablehead} align="center">
                loggedOutTime
              </TableCell> */}
              <TableCell className={classes.tablehead} align="center">
                frequency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(data => (
              <TableRow key={data._id}>
                {/* <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data._id}
                </TableCell> */}
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

                {/* <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.loggedInTime}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.loggedOutTime}
                </TableCell> */}
                {/* <TableCell
                  className={classes.tableCell}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {data.location}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
