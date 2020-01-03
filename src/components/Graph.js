import React, { useState, useEffect } from "react";
import PieChart from "react-minimal-pie-chart";
import Paper from "@material-ui/core/Paper";
import "./CSS/graph.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import io from "socket.io-client";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  Paper: {
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)",
    marginLeft: "40px",
    marginRight: "40px",
    fontSize: "20px",
    height: "380px",
    textAlign: "center"
  },
  card: {
    width: 200,
    marginRight: 10,
    background: "#00000085",
    height: "80px"
  },

  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

export default function Graph({ data }) {
  const classes = useStyles();

  const [firefox, setFirefox] = useState(0);
  const [chrome, setChrome] = useState(0);
  const [other, setOther] = useState(0);
  const [total, setTotal] = useState(0);
  const [calculatedMetrics, setCalculatedMetrics] = useState({
    firefox: 0,
    other: 0,
    chrome: 0
  });

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
  }, []);

  useEffect(() => {
    setTotal(firefox + other + chrome);
  }, [firefox, other, chrome]);

  useEffect(() => {
    if (total) {
      setCalculatedMetrics({
        firefox: ((firefox / total) * 100).toFixed(2),
        other: ((other / total) * 100).toFixed(2),
        chrome: ((chrome / total) * 100).toFixed(2)
      });
    }
  }, [total]);

  return (
    <Paper className={classes.Paper}>
      <Paper>
        {" "}
        <Typography component={"span"}>
          <h3>Traffic sources</h3>
        </Typography>
      </Paper>

      <PieChart
        data={[
          {
            title: "firefox" + " " + calculatedMetrics.firefox + "%",
            value: firefox,
            color: "#E38627"
          },
          {
            title: "Chrome" + " " + calculatedMetrics.chrome + "%",
            value: chrome,
            color: "#C13C37"
          },
          {
            title: "Other" + " " + calculatedMetrics.other + "%",
            value: other,
            color: "#6A2135"
          }
        ]}
        style={{
          height: "200px"
        }}
      />
      <div className="sources-table">
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>Firefox</Typography>
            <Typography className={classes.title}>
              {calculatedMetrics.firefox}%
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>Chrome</Typography>
            <Typography className={classes.title}>
              {calculatedMetrics.chrome}%
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>Other</Typography>
            <Typography className={classes.title}>
              {calculatedMetrics.other}%
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Paper>
  );
}
