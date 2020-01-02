import React, { useState, useEffect } from "react";
import PieChart from "react-minimal-pie-chart";
import Paper from "@material-ui/core/Paper";
import "./CSS/graph.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import io from "socket.io-client";

const useStyles = makeStyles({
  Paper: {
    width: "700px",
    marginLeft: "300px",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)",
    marginRight: "40px",
    padding: "15px",
    fontSize: "20px"
  }
});

export default function Graph({ data }) {
  const classes = useStyles();
  const [firefox, setFirefox] = useState(0);
  const [chrome, setChrome] = useState(0);
  const [other, setOther] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("other update", function(other) {
      setOther(other);
    });

    socket.on("mozilla update", function(firefox) {
      setFirefox(firefox);
    });
    socket.on("chrome update", function(chrome) {
      setChrome(chrome);
    });
    const sum = firefox + chrome + other;
    setTotal(sum);
  }, [firefox, chrome, other]);

  return (
    <Paper className={classes.Paper}>
      <Typography component={"span"}>
        <h3>Platform oriented users</h3>
      </Typography>
      <PieChart
        data={[
          {
            title: "firefox" + " " + (firefox / total) * 100 + "%",
            value: firefox,
            color: "#E38627"
          },
          {
            title: "Chrome" + " " + (chrome / total) * 100 + "%",
            value: chrome,
            color: "#C13C37"
          },
          {
            title: "Other" + " " + (other / total) * 100 + "%",
            value: other,
            color: "#6A2135"
          }
        ]}
        style={{
          height: "200px"
        }}
      />
    </Paper>
  );
}
